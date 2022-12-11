import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Section = sequelize.define(
  "Section",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    section_image: {
      type: DataTypes.BLOB,
      defaulValue: null,
    },
  },
  { timestamps: false }
);
