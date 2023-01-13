import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "railway",
  "postgres",
  "l4Gqas8ig4TQqUVjgzqA",
  {
    host: "containers-us-west-115.railway.app",
    port: "6497",
    dialect: "postgres",
    logging: () => {},

    // define: {
    //   timestamps: false,
    // },
  }
);
