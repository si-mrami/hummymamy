import multer from "multer";
import Product from "../models/products.js";

const upload = multer({ dest: "uploads/" });

const uploadMiddleware = upload.array("images", 5);

export const addProducts = async (req, res, next) => {
  try {
    const productData = req.body; // Assuming the request body contains product data including image URLs

    const product = new Product({
      name: productData.name,
      description: productData.description,
      price: productData.price,
      images: productData.images, // Assigning the provided image URLs directly
      beforePrice: productData.beforePrice,
      category: productData.category,
      hashtags: productData.hashtags.split(", "), // Splitting hashtags string into an array
    });

    await product.save();

    res.status(200).json({
      status: "OK",
      data: product,
      message: "Product created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export { uploadMiddleware };
