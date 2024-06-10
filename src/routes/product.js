import productController from "../controller/productController.js";

export default (router) => {
  router.post("/product", productController.addProduct);
  router.get("/product", productController.getAllProduct);
  router.get("/product/published", productController.getPublishedProduct);
  router.get("/product/:id", productController.getOneProduct);
  router.put("/product/:id", productController.updateProduct);
  router.delete("/product/:id", productController.deleteProduct);
};
