import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./src/routes/index.js";

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
app.use("/", router());

// testing Api

app.get("/", async (req, res) => {
  res.status(200).send({ status: true, message: "Service is getting run" });
});

// routers

// app.use("/", router());

// PORT
app.listen(3000, () => {
  console.log("Server is running port http://localhost:3000");
});
