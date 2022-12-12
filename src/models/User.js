import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
  favorites: {
    type: DataTypes.ARRAY(DataTypes.DECIMAL),
    defaultValue: [],
  },

  // timestamps: true
});

sequelize
  .sync()
  .then(() => {
    console.log("UPDATED");
  })
  .catch((error) => {
    console.log(error);
  });
