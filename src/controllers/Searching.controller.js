import { json, Op } from "sequelize";
import { Product } from "../models/Product.js";

const searchProduct = async (req, res) => {
  const { query } = req.body;
  console.log(query);

  try {
    const items = await Product.findAll({
      where: {
        description: {
          [Op.like]: `%${query}%`,
        },
      },
    });

    return res.json(items);
  } catch (error) {
    //lmao who cares
    return res.status(500).json({ message: error.message });
  }
};

export const searchs = {
  searchProduct,
};
