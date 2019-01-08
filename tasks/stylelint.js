const colors = require('colors');
const shell = require('shelljs');

function runStylelint() {
  shell.echo(colors.bgGreen('\n - Running stylelint - \n').black);
  shell.exec(`stylelint 'src/**/*.scss' --syntax scss`);
};

runStylelint();
