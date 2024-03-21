import multer from "multer";
import Product from "../models/products.js";
import { createError } from "../Error.js";

const upload = multer({ dest: "uploads/" });

const uploadMiddleware = upload.array("images", 5);

export const addProducts = async (req, res, next) => {
  try {
    const productData = req.body;

    const product = new Product({
      name: productData.name,
      description: productData.description,
      price: productData.price,
      images: productData.images,
      beforePrice: productData.beforePrice,
      category: productData.category,
      hashtags: productData.hashtags.split(", "),
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

// get all products
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (!products) {
      return next(createError(404, "Not Found!"));
    }
    res.status(200).json({ status: "OK", data: products });
  } catch (err) {
    next(err);
  }
};

// get product by id
export const getProductById = async (req, res, next) => {
  try {
    const id = req.query.id;
    const product = await Product.findById(id);
    if (!product) {
      return next(createError(404, "no Productfor this id"));
    }
    res.status(200).json({ status: "OK", data: product });
  } catch (err) {
    next(err);
  }
};

// delete product
export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.query.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return next(createError(404, "Product Not Found!"));
    }
    res.status(200).json({ status: "OK", message: "Product delete Success!" });
  } catch (err) {
    next(err);
  }
};

// get product by category
export const getByCategory = async (req, res, next) => {
	
}

export { uploadMiddleware };
