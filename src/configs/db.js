export default {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "90p@ssw0rd",
  PORT: 3380,
  DB: "sql_orm",
  dialecT: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
