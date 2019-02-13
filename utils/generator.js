const Article = require('../models/article.model');
const r = require('fixtures-generator-node');

module.exports.generateArticles = function () {
  const articles = r.utils.array(25, i => ({
    title: r.lorem.words(),
    description: r.lorem.paragraphs({ min: 5, max: 12, nl: '<br>' }),
    price: r.numbers.bool(0.75),
    brand: r.lorem.words()
  }));


  articles.map((i, article) => {
    const product = new Article(article);

    product.save()
      .then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err.message || "Something wrong while creating the product.")
      });
  })

}