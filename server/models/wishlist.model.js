const mongoose = require('mongoose');

let WishlistSchema = mongoose.Schema({
  name: String,
  description: String,
  articles: [{ article: { type: mongoose.Schema.ObjectId, ref: 'Articles' } }]
}, {
    timestamps: true
  });


WishlistSchema.methods.toWeb = function () {
  let json = this.toJSON();
  json.id = this._id;//this is for the front end
  return json;
};


module.exports = mongoose.model('Wishlists', WishlistSchema);