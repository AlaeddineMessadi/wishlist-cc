const Article = require('../models/article.model.js');

const { to, ReE, ReS } = require('../utils/utils.service');


/**
 * Create Aricle
 */
module.exports.create = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err, article;

  let article_info = req.body;
  console.log(article_info)
  [err, article] = await to(Article.create(article_info));
  if (err) return ReE(res, err, 422);

  return ReS(res, { wishlist: article.toWeb() }, 201);
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