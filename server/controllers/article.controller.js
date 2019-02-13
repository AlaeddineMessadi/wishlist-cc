const Article = require('../models/article.model.js');
const { generateArticles, removeAllArticles } = require('../utils/generator.service')
const { to, ReE, ReS } = require('../utils/utils.service');


/**
 * Create Article
 */
module.exports.create = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err, article;

  let article_info = req.body;

  // Request validation
  if (!req.body) {
    return res.status(400).send({
      message: "Product content can not be empty"
    });
  }

  [err, article] = await to(Article.create(article_info));
  if (err) return ReE(res, err, 422);

  return ReS(res, { article: article.toWeb() }, 201);
};

/**
 * Get All
 */
module.exports.getAll = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let err, articles;
  [err, articles] = await to(Article.find());

  let articles_json = []
  for (let i in articles) {
    let article = articles[i];
    articles_json.push(article.toWeb())
  }
  return ReS(res, { articles: articles_json });
};

/**
 * Get One
 */
module.exports.get = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let article = req.article;
  return ReS(res, { article: article.toWeb() });
};

/**
 * Update Article
 */
module.exports.update = async function (req, res) {
  let err, article, data;
  article = req.article;
  data = req.body;
  article.set(data);

  [err, article] = await to(article.save());
  if (err) {
    return ReE(res, err);
  }
  return ReS(res, { article: article.toWeb() });
};

/**
 * Remove Article
 */
module.exports.remove = async function (req, res) {
  let article, err;
  article = req.article;

  [err] = await to(article.remove());
  if (err) return ReE(res, 'error occured trying to delete the article');

  const response = ReS(res, { message: 'Deleted article' }, 200);
  return response;
};