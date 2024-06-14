import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.SECRET_ACCESS_TOKEN,
    (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .send({ status: false, message: "Unauthorization" });
      }
      next();
    }
  );
};

export default auth;
