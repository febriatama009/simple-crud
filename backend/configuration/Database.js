import { Sequelize } from "sequelize";

const database = new Sequelize("pijarcamp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default database;
