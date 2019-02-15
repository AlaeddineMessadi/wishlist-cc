const Article = require('../models/article.model');
const Wishlist = require('../models/wishlist.model');

const { to, ReE, ReS } = require('../utils/utils.service');


module.exports.article = async function (req, res, next) {
  let article_id, err, article;
  article_id = req.params.article_id;

  [err, article] = await to(Article.findOne({ _id: article_id }));
  if (err) return ReE(res, "Error finding Article");

  if (!article) {
    console.log(res, "Article not found with id: " + article_id);
  } else {
    req.article = article;
  }

  next();
};


module.exports.wishlist = async function (req, res, next) {
  let wishlist_id, err, wishlist;
  wishlist_id = req.params.wishlist_id;

  [err, wishlist] = await to(Wishlist.findOne({ _id: wishlist_id }));
  if (err) return ReE(res, "Error finding Wishlist");

  if (!wishlist) return ReE(res, "Wishlist not found with id: " + wishlist_id);

  req.wishlist = wishlist;
  next();
};

