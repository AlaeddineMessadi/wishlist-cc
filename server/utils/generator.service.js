const Article = require('../models/article.model');
const { to, ReE, ReS } = require('../utils/utils.service');
const casual = require('casual');

casual.define('article', function () {
  return {
    title: casual.title,
    description: casual.description,
    price: casual.double(0, 100),
    brand: casual.word,
    image: "https://fakeimg.pl/350x200/?text=" + casual.word
  };
});

module.exports.generateArticles = function (req, res, next) {
  for (let i = 0; i <= 25; i++) {
    const product = new Article(casual.article);
    product.save()
      .then(data => {
        return ReS(res, data, 200)
      }).catch(err => {
        return ReE(res, err.message || "Something wrong while creating the Article.");
      });
  }
}

module.exports.removeAllArticles = function (req, res, next) {
  Article.remove({}, function (err) {
    if (err) {
      return ReE(res, err.message || "Something wrong while creating the product.");
    } else {
      ReS(res, { message: 'success delete all' }, 200)
    }
  })
}