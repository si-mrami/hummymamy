const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  point: String,
  originalPrice: String,
  discountedPrice: String,
  task: String,
  description: {
    additionalInfo: String,
    items: [String],
  },
  lastDetails: {
    message: String,
  },
  details: {
    value: String,
  },
  images: [{ data: Buffer, contentType: String }],
  categoryName: String,
  hashtags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("ProductsHum", ProductSchema);

module.exports = Product;
