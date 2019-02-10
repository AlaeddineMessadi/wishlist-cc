const Article = require('../models/article.model');

const { to, ReE, ReS } = require('../utils/utils.service');


module.exports.article = async function (req, res, next) {
  let article_id, err, article;
  article_id = req.params.article_id;

  [err, article] = await to(Article.findOne({ _id: article_id }));
  if (err) return ReE(res, "Error finding Article");

  if (!article) return ReE(res, "Article not found with id: " + article_id);

  req.article = article;
  next();
};

