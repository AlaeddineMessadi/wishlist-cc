const Article = require('../models/article.model');
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

module.exports.generateArticles = function () {
  for (let i = 0; i <= 25; i++) {
    const product = new Article(casual.article);

    product.save()
      .then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err.message || "Something wrong while creating the product.")
      });
  }
}

module.exports.removeAllArticles = function () {
  Article.remove({}, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('success delete all');
    }
  })
}