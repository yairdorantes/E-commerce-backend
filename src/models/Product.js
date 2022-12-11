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
  description: {
    type: DataTypes.STRING,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
  main_image: {
    type: DataTypes.BLOB,
    defaultValue: null,
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
  section: {
    type: DataTypes.INTEGER,
    references: {
      model: Section,
      key: "id",
    },
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
