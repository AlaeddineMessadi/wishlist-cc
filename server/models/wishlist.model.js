const mongoose = require('mongoose');

let WishlistSchema = mongoose.Schema({
  name: String,
  description: String
}, {
    timestamps: true,
    toObject: { virtuals: true }
  });


WishlistSchema.virtual('articles', {
  ref: 'Article', // The model to use
  localField: 'title', // Find people where `localField`
  foreignField: 'wishlist', // is equal to `foreignField`
  justOne: false
});

WishlistSchema.methods.addArticle = function (article) {
  console.log(this.articles)

  return this;
};

WishlistSchema.methods.toWeb = function () {
  let json = this.toJSON();
  json.id = this._id;//this is for the front end
  return json;
};


module.exports = mongoose.model('Wishlist', WishlistSchema);