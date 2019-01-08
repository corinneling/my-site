const pkg = require('../package.json');
const fs = require('fs');
const path = require('path');
const globby = require('globby');
const shell = require('shelljs');
const handlebars = require('handlebars');
const helpers = require('./helpers');
const fm = require('front-matter');
const YAML = require('yamljs');
const colors = require('colors');

const PATHS = {
  layouts: './src/templates/layouts',
  pages: './src/templates/pages/**/*.hbs',
  partials: './src/templates/partials/**/*.hbs',
  data: './data',
  dest: './dist'
};

const readFile = file => fs.readFileSync(file, 'utf8');
const tmplName = filePath => path.basename(filePath, '.hbs');
const ymlName = filePath => path.basename(filePath, '.yml');

const registerHelpers = () => helpers.register(handlebars);

const registerPartials = () => {
  globby.sync(PATHS.partials).forEach((file) => {
    let fileName = tmplName(file);
    let fileOutput = readFile(file);
    handlebars.registerPartial(fileName, fileOutput);
  });
};

const getPageComponents = (pagePath) => {
  let file = readFile(pagePath);
  let frontMatter = fm(file);
  let layoutFile = frontMatter.attributes.layoutFile;
  let dataFile = frontMatter.attributes.dataFile;
  return {
    layout: getLayout(layoutFile),
    data: getData(dataFile),
    body: frontMatter.body,
    rename: frontMatter.attributes.rename
  };
};

const getLayout = (layoutFileName) => {
  if (!layoutFileName) return false;
  let layoutFilePath = path.join(PATHS.layouts, `${layoutFileName}.hbs`);
  let layout = readFile(layoutFilePath);
  return layout;
};

const getData = (dataFiles) => {
  if (!dataFiles) return {};
  let dataFilePaths = path.join(PATHS.data, `${dataFiles}.yml`);
  let glob = globby.sync([
    path.join(PATHS.data, 'common/*.yml'),
    dataFilePaths
  ]);
  return glob.reduce((data, file) => {
    let key = ymlName(file);
    let val = YAML.parse(readFile(file));
    data[key] = val;
    return data;
  }, {});
};

const renderPage = (pagePath) => {
  let pageComponents = getPageComponents(pagePath);
  let pageName = pageComponents.rename
    ? pageComponents.rename
    : tmplName(pagePath);
  let pageTemplate = handlebars.compile(pageComponents.body);
  let pageData = Object.assign(pageComponents.data, { pageName, pkg: pkg });
  let renderedPage = pageTemplate(pageData);

  if (pageComponents.layout) {
    var layoutTemplate = handlebars.compile(pageComponents.layout);
    var layoutData = Object.assign(pageData, { body: renderedPage });
    var layout = layoutTemplate(layoutData);
  }

  return {
    name: pageName,
    content: layout || renderedPage
  };
};

const isPage = (pathToTest) => {
  if (!pathToTest) return false;
  let pagesDir = './src/templates/pages';
  let fileName = path.basename(pathToTest);
  let pages = fs.readdirSync(pagesDir);
  return pages.indexOf(fileName) > -1;
};

function compileHbs($event, $file) {
  shell.echo(colors.bgGreen('\n - Compiling Handlebars Templates - \n').black);

  let pagesToRender = isPage($file) ? $file : PATHS.pages;

  registerHelpers();
  registerPartials();

  globby.sync(pagesToRender).forEach((pagePath) => {
    let page = renderPage(pagePath);
    let destination = path.join(PATHS.dest, `${page.name}.html`);
    shell.mkdir('-p', path.dirname(destination));
    fs.writeFileSync(destination, page.content);
    shell.echo(`${path.basename(pagePath)} ---> ${destination} ${colors.green('✓')}`);
  });
};

compileHbs();
