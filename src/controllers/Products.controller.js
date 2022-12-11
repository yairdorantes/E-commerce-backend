import { Product } from "../models/Product.js";
const getProducts = async (req, res) => {
  const { amount, from, section } = req.params;
  try {
    const products = await Product.findAll({
      where: {
        section,
      },
      attributes: ["id", "description", "price", "main_image", "section"],
      //   skip: from,
      offset: from,
      limit: amount,
    });

    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const entries = Object.entries(req.body);
    Product.create(Object.fromEntries(entries))
      .then((response) => {
        res.json({ message: "success!", response });
      })
      .catch((err) => {
        return res.status(500).json({ message: error.message });
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const products = {
  getProducts,
  createProduct,
};
