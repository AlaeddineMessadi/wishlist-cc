const Article = require('../models/article.model.js');
const Wishlist = require('../models/wishlist.model.js');


const { to, ReE, ReS } = require('../utils/utils.service');


/**
 * Create Wishlist
 */
module.exports.create = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err, wishlist;

  let wishlist_info = req.body;

  [err, wishlist] = await to(Wishlist.create(wishlist_info));
  if (err) return ReE(res, err, 422);

  return ReS(res, { wishlist: wishlist.toWeb() }, 201);
};

/**
 * Get All
 */
module.exports.getAll = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let err, wishlists;
  [err, wishlists] = await to(Wishlist.find());

  let wishlists_json = []
  for (let i in wishlists) {
    let wishlist = wishlists[i];
    wishlists_json.push(wishlist.toWeb())
  }
  return ReS(res, { wishlists: wishlists_json });
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