import mongoose from "mongoose";

const humyProductSchema = mongoose.Schema({
  name: String,
  description: String,
  price: String,
//   images: [{ data: Buffer, contentType: String }],
  images: [String],
  beforePrice: String,
  category: String,
  hashtags: [String],
});

export default mongoose.model("humyProduct", humyProductSchema);
