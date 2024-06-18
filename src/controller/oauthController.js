import jwt from "jsonwebtoken";

const googleCallback = async (req, res) => {
  let user = req.session.passport.user.dataValues;
  let token = jwt.sign({ user: user }, process.env.SECRET_ACCESS_TOKEN, {
    expiresIn: "8h",
  });
  return res.send({
    status: true,
    message: "success.",
    token: { type: "Bearer", access_token: token },
  });
};

export default { googleCallback };
