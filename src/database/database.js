import Sequelize from "sequelize";

export const sequelize = new Sequelize("ecommerce", "yair", "1234", {
  host: "127.0.0.1",
  dialect: "postgres",
  logging: () => {},

  // define: {
  //   timestamps: false,
  // },
});
