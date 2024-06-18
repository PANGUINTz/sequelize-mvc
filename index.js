import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./src/routes/index.js";
import passport from "passport";
import session from "express-session";

import "./src/utils/passport.js";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
dotenv.config();

app.use(
  session({
    secret: process.env.SESSION_SECRET, // session secret
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", router());

// testing Api

app.get("/", async (req, res) => {
  res.status(200).send({ status: true, message: "Service is getting run" });
});

// PORT
app.listen(3000, () => {
  console.log("Server is running port http://localhost:3000");
});
