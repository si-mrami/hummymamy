import express from "express";
import { addProducts, uploadMiddleware } from "../controllers/Products.js";

const productRouter = express.Router();

// add product
productRouter.post("/addProduct", uploadMiddleware, addProducts);

export default productRouter;
