import authController from "../controller/authController.js";

export default (router) => {
  router.post("/sign-in", authController.signIn);
  router.post("/sign-up", authController.signUp);
};
