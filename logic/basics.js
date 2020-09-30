var hbs = require('hbs');
var debug = require('debug')('jill-web-4:basics');

// Need to mark selected option inside a select.
hbs.registerHelper('active', function(slugName, value) {
  if ( typeof value !== 'string' ) {
    var l = value.length;
    while ( l-- ) {
      var currSlug = value[l];
      if (slugName == currSlug) {
        return new hbs.SafeString('is-active');
      }
    }
  }
  else {
    if (slugName == value) {
      return new hbs.SafeString('is-active');
    }
    else {
      return '';
    }
  }
});

hbs.registerHelper('gallery', function(imagesArrayString) {
  // console.log('imagesArrayString', imagesArrayString);
  const images = JSON.parse(`${imagesArrayString}`).gallery;
  // console.log('images', images[2]);
  if (!images && !Array.isArray(images) && images.length < 1) {
    return false;
  }

  const galleryElements = [];
  for(let i = 0; i < images.length; i++) {
    galleryElements.push(`
      <div
        class="image-box-${i} ${i === 0 ? 'cover' : ''}"
        style="background-image: url('${images[i]}')"
      >&nbsp;</div>
    `);
  }
  return new hbs.SafeString(galleryElements.join(''));
});
