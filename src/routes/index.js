import express from "express";
import product from "./product.js";
import review from "./review.js";
import auth from "./auth.js";

const router = express.Router();

export default () => {
  product(router);
  review(router);
  auth(router);
  return router;
};
