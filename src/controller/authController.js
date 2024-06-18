import db from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const User = db.users;

const signUp = async (req, res) => {
  let { name, email, password, role } = req.body;
  try {
    let hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    if (user.id) {
      return res.status(200).send({ status: true, message: "Created" });
    }

    return res.send({ message: "failed" });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

const signIn = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ where: { email: email } });
    let matchPassword = await bcrypt.compare(password, user.password);

    if (matchPassword) {
      let token = jwt.sign({ user: user }, process.env.SECRET_ACCESS_TOKEN, {
        expiresIn: "8h",
      });
      return res.send({
        status: true,
        message: "success.",
        token: { type: "Bearer", access_token: token },
      });
    }
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export default {
  signIn,
  signUp,
};
