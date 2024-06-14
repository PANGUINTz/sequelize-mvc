import db from "../configs/db.js";

import { Sequelize, DataTypes } from "sequelize";
import product from "./product.js";
import review from "./review.js";
import auth from "./auth.js";

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
  host: db.HOST,
  port: db.PORT,
  dialect: db.dialecT,
  operatosrAliases: false,

  pool: {
    max: db.pool.max,
    min: db.pool.min,
    acquire: db.pool.acquire,
    idle: db.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error :", err);
  });

const dbConfig = {};

dbConfig.Sequelize = Sequelize;
dbConfig.sequelize = sequelize;

dbConfig.auth = auth(sequelize, DataTypes);
dbConfig.products = product(sequelize, DataTypes);
dbConfig.reviews = review(sequelize, DataTypes);

dbConfig.products.hasMany(dbConfig.reviews);

dbConfig.reviews.belongsTo(dbConfig.products);

dbConfig.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done");
});

export default dbConfig;
