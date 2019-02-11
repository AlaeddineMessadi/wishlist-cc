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
module.exports.getOne = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let wishlist = req.wishlist;
  return ReS(res, { wishlist: wishlist.toWeb() });
};

/**
 * Get One
 */
module.exports.getAllArticles = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let wishlist_id, err, wishlist, article;
  wishlist_id = req.params.wishlist_id;

  [err, wishlist] = await to(Wishlist.findOne({ _id: wishlist_id }));
  // [err, article] = await to(Article.find({}).populate('articles'));

  console.log(article)
  if (err) return ReE(res, "Error finding Wishlist");

  if (!article) return ReE(res, "Wishlist not found with id: " + wishlist_id);

  // return ReS(res, { article: article.toWeb() });
  return ReS(res, { wishlist: wishlist.toWeb() });
};



/**
 * addArticleToWishlist
 */
module.exports.addArticleToWishlist = async function (req, res) {
  let err, article, wishlist, data;
  article = req.article;
  wishlist = req.wishlist;

  if (article.wishlist.indexOf(wishlist._id) < 0) {
    article.wishlist.push(wishlist._id)
  }

  [err, article] = await to(article.save());

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