const Article = require('../models/article.model.js');

const { to, ReE, ReS } = require('../utils/utils.service');

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