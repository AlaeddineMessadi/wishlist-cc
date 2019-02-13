const express = require('express');
const router = express.Router();

const ArticlesController = require('../../controllers/article.controller');
// const WishlistController = require('../controllers/wishlist.controller');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ status: "success", message: "Wishlist Adidas API", data: { "version_number": "v1.0.0" } })
});

/**
 * Articles
 */
router.post('/articles', ArticlesController.create);       // C
router.get('/articles', ArticlesController.getAll);        // R
router.put('/articles', ArticlesController.update);        // U
router.delete('/articles', ArticlesController.remove);     // D

/**
 * Wishlist
 */
// router.post('/wishlist', WishlistController.create);       // C
// router.get('/wishlist', WishlistController.get);           // R
// router.put('/wishlist', WishlistController.update);        // U
// router.delete('/wishlist', WishlistController.remove);     // D


module.exports = router;