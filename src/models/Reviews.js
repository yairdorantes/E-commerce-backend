import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Product } from "../models/Product.js";
import { User } from "../models/User.js";

export const Reviews = sequelize.define("Reviews", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  text: {
    type: DataTypes.TEXT,
    defaultValue: null,
  },

  product: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: "id",
    },
  },
  // user: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: User,
  //     key: "id",
  //   },
  // },
});
