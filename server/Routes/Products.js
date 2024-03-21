import express from "express";
import {
  addProducts,
  deleteProduct,
  getProductById,
  getProducts,
  uploadMiddleware,
} from "../controllers/Products.js";

const productRouter = express.Router();

// add product
productRouter.post("/addProduct", uploadMiddleware, addProducts);

// get Products
productRouter.get("/all", getProducts);

// delete Product
productRouter.delete("/delete", deleteProduct);

// get product by id
productRouter.get("/get", getProductById);

export default productRouter;
