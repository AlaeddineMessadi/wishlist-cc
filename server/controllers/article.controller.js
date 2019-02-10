const Article = require('../models/article.model.js');

const { to, ReE, ReS } = require('../utils/utils.service');

console.log(Article)
/**
 * Create 
 * @param {*} req 
 * @param {*} res 
 */
const create = async function (req, res) {
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
}
module.exports.create = create;

const getAll = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let err, articles;
  [err, articles] = await to(Article.find());


  let articles_json = []
  for (let i in articles) {
    let article = articles[i];
    articles_json.push(article.toWeb())
  }
  return ReS(res, { articles: articles_json });
}
module.exports.getAll = getAll;

const get = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let article = req.article;
  return ReS(res, { article: article.toWeb() });
}
module.exports.get = get;

const update = async function (req, res) {
  let err, article, data;
  article = req.user;
  data = req.body;
  article.set(data);

  [err, article] = await to(article.save());
  if (err) {
    return ReE(res, err);
  }
  return ReS(res, { article: article.toWeb() });
}
module.exports.update = update;

const remove = async function (req, res) {
  let article, err;
  article = req.article;

  [err, article] = await to(article.remove());
  if (err) return ReE(res, 'error occured trying to delete the article');

  return ReS(res, { message: 'Deleted article' }, 204);
}
module.exports.remove = remove;