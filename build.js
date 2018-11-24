var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var sass        = require('metalsmith-sass');
var serve       = require('metalsmith-serve');
var watch       = require('metalsmith-watch');
var include     = require('metalsmith-include-content');
var assets      = require('metalsmith-assets');

Metalsmith(__dirname)
  .metadata({
    title: "joyce roland-malatek",
    description: "an artist's vision",
    generator: "Metalsmith",
    url: "http://joycerolandmalatek.com",
    instagram: "malatekart"
  })
  .source('./src')
  .destination('./build')
  .use(markdown())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(sass({
    outputDir: 'css/'
  }))
  .use(include())
  .use(serve())
  .use(assets({
    source: './src/assets/images',
    destination: './images'
  }))
  .use(watch({}))
  .build(function(err, files) {
    if (err) { throw err; }
  });

