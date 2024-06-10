import express from "express";
import product from "./product.js";
import review from "./review.js";

const router = express.Router();

export default () => {
  product(router);
  review(router);
  return router;
};
