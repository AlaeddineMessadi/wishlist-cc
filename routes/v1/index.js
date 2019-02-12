const express = require('express');
const router = express.Router();

const ArticlesController = require('../controllers/article.controller');
const WishlistController = require('../controllers/wishlist.controller');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ status: "success", message: "Wishlist Adidas API", data: { "version_number": "v1.0.0" } })
});

/**
 * Articles
 */
router.post('/users', UserController.create);       // C
router.get('/users', UserController.get);           // R
router.put('/users', UserController.update);        // U
router.delete('/users', UserController.remove);     // D

/**
 * Wishlist
 */
router.post('/wishlist', UserController.create);       // C
router.get('/wishlist', UserController.get);           // R
router.put('/wishlist', UserController.update);        // U
router.delete('/wishlist', UserController.remove);     // D