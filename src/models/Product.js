import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Section } from "./SectionProduct.js";
export const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  section: {
    type: DataTypes.INTEGER,
    references: {
      model: Section,
      key: "id",
    },
  },
  description: {
    type: DataTypes.STRING,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
  sales: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  details: {
    type: DataTypes.STRING,
  },
  rate: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  main_image: {
    type: DataTypes.TEXT,
    defaultValue: null,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("UPDATED productooooo");
  })
  .catch((error) => {
    console.log(error);
  });
// await Cart.save();
