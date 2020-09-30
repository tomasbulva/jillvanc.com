var debug = require('debug')('jill-web-4:work.js');
var variables = require('./variables.js');

debug(variables);

module.exports = {
  title: 'Work - Media Arts Lab',
  slug: 'media-arts-lab',
  showSubmenu: variables.submenu
};
