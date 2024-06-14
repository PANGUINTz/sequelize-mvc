import productController from "../controller/productController.js";
import auth from "../middleware/auth.js";
import roleVerify from "../middleware/role.js";

export default (router) => {
  router.post("/product", [auth, roleVerify], productController.addProduct);
  router.get(
    "/product",
    [auth, roleVerify(["ADMIN", "STAFF"])],
    productController.getAllProduct
  );
  router.get("/product/published", auth, productController.getPublishedProduct);
  router.get("/product/:id", auth, productController.getOneProduct);
  router.put("/product/:id", auth, productController.updateProduct);
  router.delete("/product/:id", auth, productController.deleteProduct);
};
