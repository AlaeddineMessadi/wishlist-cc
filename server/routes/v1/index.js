const express = require('express');
const router = express.Router();

const ArticlesController = require('../../controllers/article.controller');
const WishlistController = require('../../controllers/wishlist.controller');

const fixturesGenerator = require('../../utils/generator.service');

const custom = require('../../middleware/custom.middleware');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ status: "success", message: "Wishlist Adidas API", data: { "version_number": "v1.0.0" } })
});

/**
 * Generate Articles
 */
router.get('/generator', fixturesGenerator.generateArticles);
router.get('/generator/remove', fixturesGenerator.removeAllArticles);

/**
 * Articles
 */
router.get('/articles', ArticlesController.getAll);

/**
 * Wishlist
 */
router.post('/wishlists', WishlistController.create);
router.get('/wishlists/:wishlist_id', custom.wishlist, WishlistController.getOne);
router.get('/wishlists', WishlistController.getAll);
// router.post('/wishlists/:wishlist_id/:article_id', WishlistController.addArticleToWishlist);
// router.delete('/wishlists/:wishlist_id/:article_id', WishlistController.RemoveArticleToWishlist);
// router.get('/wishlist/:wishlist_id', WishlistController.getAllArticles);


module.exports = router;

