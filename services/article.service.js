const Article = require('../models/article.model');

const { to, TeE } = require('../utils/utils.service');


/**
 * Article Service
 */

// Create
module.exports.createArticle = async function (newArticle) {
  let err, article;

  [err, article] = await to(Article.findOne({ productid: newArticle.productid }));

  if (!article) {
    [err, article] = await to(Article.create(newArticle));
  }

  if (err) TeE(err);

  return [err, article];
}

// Get all Articles
module.exports.getArticles = async function () {
  let err, articles;
  [err, articles] = await to(Article.find());

  return [err, articles]
}