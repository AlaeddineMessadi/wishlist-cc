const mongoose = require('mongoose');

let ArticleSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  brand: String,
  wishlist: [mongoose.Schema.Types.ObjectId]
}, {
    timestamps: true
  });

ArticleSchema.methods.toWeb = function () {
  let json = this.toJSON();
  json.id = this._id;//this is for the front end
  return json;
};

module.exports = mongoose.model('Article', ArticleSchema);