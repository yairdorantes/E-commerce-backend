import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from "./User.js";
export const Cart = sequelize.define("Carts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
User.hasOne(Cart, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  sourceKey: "id",
});
Cart.belongsTo(User);
