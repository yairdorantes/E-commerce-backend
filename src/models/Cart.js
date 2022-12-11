import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from "./User.js";
export const Cart = sequelize.define(
  "Carts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  { timestamps: false }
);
// User.hasOne(Cart, {
//   foreignKey: "userId",
//   onDelete: "CASCADE",

//   sourceKey: "id",
// });
// Cart.belongsTo(User, { foreignKey: "id" });

sequelize
  .sync()
  .then(() => {
    console.log("UPDATED carritoooo");
  })
  .catch((error) => {
    console.log(error);
  });
// await Cart.save();
