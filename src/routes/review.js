import reviewController from "../controller/reviewController.js";

export default (router) => {
  router.post("/review", reviewController.addReview);
  router.get("/review", reviewController.getAllReview);
  router.get("/review/:productId", reviewController.getProductReview);
  router.get("/review/:id", reviewController.getOneReview);
  router.put("/review/:id", reviewController.updateReview);
  router.delete("/review/:id", reviewController.deleteReview);
};
