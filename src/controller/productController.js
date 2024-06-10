import db from "../models/index.js";

const Product = db.products;
const Review = db.reviews;

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  return res
    .status(200)
    .send({ status: true, message: "created", product: product });
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll({ include: Review });
    return res
      .status(200)
      .send({ status: true, message: "success", product: products });
  } catch (error) {
    return res.status(error?.code).send({ message: error });
  }
};

const getOneProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.findOne({
    where: { id: id },
    include: Review,
  });
  res.status(200).send({ status: true, message: "success", product: product });
};

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res
    .status(200)
    .send({ status: true, message: "updated success", product: product });
};

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send({ status: true, message: "deleled success" });
};

const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send({ status: true, message: "success", product: products });
};

export default {
  addProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
};
