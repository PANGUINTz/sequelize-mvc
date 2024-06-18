import jwt from "jsonwebtoken";

const googleCallback = async (req, res) => {
  const CLIENT_URL = "your_website";
  let user = req.session.passport.user.dataValues;
  let token = jwt.sign({ user: user }, process.env.SECRET_ACCESS_TOKEN, {
    expiresIn: "8h",
  });
  res.cookie("token", token, {
    secure: true,
    sameSite: "None",
    maxAge: 3 * 60 * 60 * 1000,
  });
  res.redirect(CLIENT_URL);
};

export default { googleCallback };
