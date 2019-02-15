const Wishlist = require('../models/wishlist.model.js');
const { createWishlist, getWishlists } = require('../services/wishlist.service');
const { createArticle, getArticles } = require('../services/article.service')

const { to, ReE, ReS } = require('../utils/utils.service');


/**
 * Create Wishlist
 */
module.exports.create = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err, wishlist;

  [err, wishlist] = await createWishlist();
  if (err) return ReE(res, err, 422);

  return ReS(res, { wishlist: wishlist.toWeb() }, 201);
};

/**
 * Get All
 */
module.exports.getAll = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err, wishlists;
  [err, wishlists] = await getWishlists();

  if (err) return ReE(res, err, 422);

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
module.exports.getOne = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  console.log('here')
  let wishlist = req.wishlist;
  if (!wishlist) return ReE(res, "Error finding Wishlist");

  return ReS(res, { wishlist: wishlist.toWeb() });
};

/**
 * Get all articles 
 */
module.exports.getAllArticles = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  console.log('heeer')
  let err, wishlist, wishlist_id;
  wishlist_id = req.params.wishlist_id;

  console.log(wishlist_id)
  if (!wishlist_id || wishlist_id === 'undefined' || wishlist_id === 'null') {
    [err, wishlist] = await createWishlist();
    if (err) return ReE(res, err, 422);
  } else {
    [err, wishlist] = await to(Wishlist.findOne({ _id: wishlist_id }).populate('articles'));

    if (err) return ReE(res, "Error finding Wishlist");

    if (!wishlist) return ReE(res, "Wishlist not found with id: " + wishlist_id);
  }

  return ReS(res, { id: wishlist._id, articles: wishlist.articles });
};

/**
 * addArticleToWishlist
 */
module.exports.addArticleToWishlist = async function (req, res) {
  let err, article, wishlist, data;

  article = req.body.article;
  wishlist = req.wishlist;
  /** find or create article */
  [err, article] = await createArticle(article);

  /** assign it to wish list */
  if (wishlist.articles.indexOf(article._id) < 0) {
    wishlist.articles.push(article._id)
  }

  [err, wishlist] = await to(wishlist.save());

  return ReS(res, { wishlist: wishlist.toWeb() });
};

/**
 * removeArticleToWishlist
 */
module.exports.removeArticleToWishlist = async function (req, res) {
  let err, article, wishlist;
  article = req.article;
  wishlist = req.wishlist;

  const index = wishlist.articles.indexOf(article._id);

  if (index >= 0) {
    wishlist.articles.splice(index, 1);
  }

  [err, wishlist] = await to(wishlist.save());

  return ReS(res, { wishlist: wishlist.toWeb() });
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