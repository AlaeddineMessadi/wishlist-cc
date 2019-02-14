const mongoose = require('mongoose');

let ArticleSchema = mongoose.Schema({
  displayName: String,
  imageURL: String,
  price: Number,
  salePrice: Number,
  reviewCount: Number,
  reviewRating: Number,
  subTitle: String,
}, {
    timestamps: true
  });

ArticleSchema.methods.toWeb = function () {
  let json = this.toJSON();
  json.id = this._id;//this is for the front end
  return json;
};

module.exports = mongoose.model('Article', ArticleSchema);