var debug = require('debug')('jill-web-4:work.js');
var variables = require('./variables.js');

debug(variables);

module.exports = {
  title: 'Contact',
  slug: 'contact',
  showSubmenu: variables.submenu
};
