const colors = require('colors');
const shell = require('shelljs');

function compileSass() {
  shell.echo(colors.bgGreen('\n - Compiling Sass - \n').black);
  shell.exec('node-sass ./src/scss/ -o ./dist/css --output-style compressed');
};

compileSass();