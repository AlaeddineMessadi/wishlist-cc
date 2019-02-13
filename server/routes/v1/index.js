const express = require('express');
const router = express.Router();

const ArticlesController = require('../../controllers/article.controller');
// const WishlistController = require('../controllers/wishlist.controller');

const custom = require('../../middleware/custom.middleware');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ status: "success", message: "Wishlist Adidas API", data: { "version_number": "v1.0.0" } })
});

/**
 * Articles
 */
router.get('/articles', ArticlesController.getAll);        // R
router.put('/articles/:article_id', custom.article, ArticlesController.update);        // U
router.delete('/articles/:article_id', custom.article, ArticlesController.remove);     // D

/**
 * Wishlist
 */
// router.post('/wishlist', WishlistController.create);       // C
// router.get('/wishlist', WishlistController.get);           // R
// router.put('/wishlist', WishlistController.update);        // U
// router.delete('/wishlist', WishlistController.remove);     // D


module.exports = router;

