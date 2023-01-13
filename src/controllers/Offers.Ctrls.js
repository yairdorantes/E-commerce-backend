import { sequelize } from "../database/database.js";
import { Product } from "../models/Product.js";

const getOffers = async (req, res) => {
  try {
    const offers = await Product.findAll({
      order: sequelize.literal("RANDOM()"),
      limit: 6,
    });
    return res.status(200).json(offers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const offers = {
  getOffers,
};
