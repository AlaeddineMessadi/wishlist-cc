const { createArticle, getArticles } = require('../services/article.service')
const { ReE, ReS } = require('../utils/utils.service');


/**
 * Create Aricle
 */
module.exports.create = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err, article;

  [err, article] = await createArticle(req.body);

  if (err) return ReE(res, err, 422);

  return ReS(res, { article: article.toWeb() }, 201);
};

/**
 * Get All
 */
module.exports.getAll = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let err, articles;
  [err, articles] = await getArticles();

  let articles_json = []
  for (let i in articles) {
    let article = articles[i];
    articles_json.push(article.toWeb())
  }
  return ReS(res, { articles: articles_json });
};
