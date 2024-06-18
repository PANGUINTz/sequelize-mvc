import OAuth from "../controller/oauthController.js";
import passport from "passport";

export default (router) => {
  router.get(
    "/google",
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })
  );
  router.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "your_website",
      scope: ["email", "profile"],
    }),
    OAuth.googleCallback
  );
};
