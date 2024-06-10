import db from "../models/index.js";

const Review = db.reviews;

const addReview = async (req, res) => {
  let info = {
    rating: req.body.rating,
    productId: req.body.productId,
    description: req.body.description,
  };

  const review = await Review.create(info);
  return res
    .status(200)
    .send({ status: true, message: "created", review: review });
};

const getAllReview = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    return res
      .status(200)
      .send({ status: true, message: "success", reviews: reviews });
  } catch (error) {
    return res.status(error?.code).send({ message: error });
  }
};

const getOneReview = async (req, res) => {
  let id = req.params.id;
  const review = await Review.findOne({ where: { id: id } });
  res.status(200).send({ status: true, message: "success", review: review });
};

const updateReview = async (req, res) => {
  let id = req.params.id;
  const review = await Review.update(req.body, { where: { id: id } });
  res
    .status(200)
    .send({ status: true, message: "updated success", review: review });
};

const deleteReview = async (req, res) => {
  let id = req.params.id;
  await Review.destroy({ where: { id: id } });
  res.status(200).send({ status: true, message: "deleled success" });
};

const getProductReview = async (req, res) => {
  const products = await Review.findAll({ where: { published: true } });
  res.status(200).send({ status: true, message: "success", product: products });
};

export default {
  addReview,
  getAllReview,
  getOneReview,
  updateReview,
  deleteReview,
  getProductReview,
};
