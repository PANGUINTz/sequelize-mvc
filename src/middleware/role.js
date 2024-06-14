import jwt from "jsonwebtoken";

const roleVerify = (roles) => {
  return (req, res, next) => {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.SECRET_ACCESS_TOKEN,
      (err, decoded) => {
        if (err) {
          return res
            .status(401)
            .send({ status: false, message: "Unauthorization" });
        }
        if (!roles.includes(decoded.user.role)) {
          return res.status(403).send({
            status: false,
            message: "Access denied. Insufficient role permissions.",
          });
        }
        next();
      }
    );
  };
};

export default roleVerify;
