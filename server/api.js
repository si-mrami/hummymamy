import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import productRoute from "./Routes/Products.js";

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
  })
);

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://simrami1:mrami1902@cluster0.a4bqotb.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Db Connected!");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/products", productRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something Wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
