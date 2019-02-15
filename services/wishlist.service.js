const Wishlist = require('../models/wishlist.model');

const { to, TeE } = require('../utils/utils.service');


/**
 * Wishlist Service
 */

// Create
module.exports.createWishlist = async function (newWishlist) {
  let err, wishlist;
  [err, wishlist] = await to(Wishlist.create(newWishlist));

  if (err) TeE(err);

  return [err, wishlist];
}

// Get all Wishlists
module.exports.getWishlists = async function () {
  let err, wishlists;
  [err, wishlists] = await to(Wishlist.find());

  return [err, wishlists]
}
