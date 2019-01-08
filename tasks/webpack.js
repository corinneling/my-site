const shell = require('shelljs');

function runWebpack() {
  if (process.env.NODE_ENV === 'production') {
    shell.exec('webpack --colors --display-chunks --display-modules -p');
  } else {
    shell.exec('webpack --colors --display-chunks -w');
  }
};

runWebpack();
