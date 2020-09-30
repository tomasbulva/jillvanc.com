var express = require('express');
var router = express.Router();
var hbs = require('hbs');
var fs = require('fs');
var debug = require('debug')('jill-web-4:index');

hbs.registerPartial('meta', fs.readFileSync(__dirname + '/../views/meta.html', 'utf8'));
hbs.registerPartial('header', fs.readFileSync(__dirname + '/../views/header.html', 'utf8'));
hbs.registerPartial('footer', fs.readFileSync(__dirname + '/../views/footer.html', 'utf8'));
hbs.registerPartial('footerMeta', fs.readFileSync(__dirname + '/../views/footer-meta.html', 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/work');
});

router.get('/products', function(req, res, next) {
  var products = require('../logic/products');
  //debug(work);

  res.render(
    'products',
    products
  );
});

router.get('/work', function(req, res, next) {
  var work = require('../logic/work');
  //debug(work);

  res.render(
    'work',
    work
  );
});

router.get('/work/media-arts-lab', function(req, res, next) {
  var workMediaArtsLab = require('../logic/work-media-arts-lab');
  //debug(workMediaArtsLab);

  res.render(
    'work-media-arts-lab',
    workMediaArtsLab
  );
});

router.get('/work/siver-pickle', function(req, res, next) {
  var workSiverPickle = require('../logic/work-silver-pickle');

  res.render(
    'work-siver-pickle',
    workSiverPickle
  );
});

router.get('/work/go-pro', function(req, res, next) {
  var workGoPro = require('../logic/work-go-pro');

  res.render(
    'work-go-pro',
    workGoPro
  );
});

router.get('/work/ogilvy-and-mather', function(req, res, next) {
  var workOgilvyAndMather = require('../logic/work-ogilvy-and-mather');

  res.render(
    'work-ogilvy-and-mather',
    workOgilvyAndMather
  );
});

router.get('/about', function(req, res, next) {
  var about = require('../logic/about');

  res.render(
    'about',
    about
  );
});

router.get('/contact', function(req, res, next) {
  var contact = require('../logic/contact');

  res.render(
    'contact',
    contact
  );
});

module.exports = router;
