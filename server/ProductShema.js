const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  images: [{ data: Buffer, contentType: String }],
  beforePrice: String,
  category: String,
  hashtags: [String],
});

const Product = mongoose.model('ProductsHum', ProductSchema);

module.exports = Product;
