import dotenv from "dotenv";
dotenv.config();
export default {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASS,
  PORT: process.env.DB_PORT,
  DB: process.env.DB_NAME,
  dialecT: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
