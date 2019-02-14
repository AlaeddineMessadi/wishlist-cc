const mongoose = require('mongoose');

let WishlistSchema = mongoose.Schema({
  name: String,
  description: String,
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }]
}, {
    timestamps: true
  });

WishlistSchema.methods.toWeb = function () {
  let json = this.toJSON();
  json.id = this._id;//this is for the front end
  return json;
};


module.exports = mongoose.model('Wishlist', WishlistSchema);