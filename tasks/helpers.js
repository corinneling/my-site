const moment = require('moment');
const markdown = require('helper-markdown');

module.exports.register = function hbsHelpers(Handlebars) {
  Handlebars.registerHelper('createId', str => str.toLowerCase().replace(/\s/gi, '_'));
  Handlebars.registerHelper('now', format => moment().format(format));
  Handlebars.registerHelper('join', (arr, glue) => arr.join(glue));
  Handlebars.registerHelper('markdown', require('helper-markdown'));
};
