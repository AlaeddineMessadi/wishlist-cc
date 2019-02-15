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
router.post('/articles', ArticlesController.create);
router.get('/articles', ArticlesController.getAll);


/**
 * Wishlist
 */
router.post('/wishlists', WishlistController.create);
router.get('/wishlists/:wishlist_id', WishlistController.getOne);
router.get('/wishlists/articles/:wishlist_id', WishlistController.getAllArticles);
router.get('/wishlists', WishlistController.getAll);
router.post('/wishlists/:wishlist_id/:article_id', custom.wishlist, custom.article, WishlistController.addArticleToWishlist);
router.delete('/wishlists/:wishlist_id/:article_id', custom.wishlist, custom.article, WishlistController.removeArticleToWishlist);


module.exports = router;

