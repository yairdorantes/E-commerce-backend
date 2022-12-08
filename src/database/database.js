import Sequelize from "sequelize";

export const sequelize = new Sequelize("ecommerce", "yair", "1234", {
  host: "localhost",
  dialect: "postgres",
});
