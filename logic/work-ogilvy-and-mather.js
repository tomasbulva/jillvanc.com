var debug = require('debug')('jill-web-4:work.js');
var variables = require('./variables.js');

debug(variables);

module.exports = {
  title: 'Work - Ogilvy And Mather',
  slug: 'ogilvy-and-mather',
  showSubmenu: variables.submenu
};
