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
    const count = await Product.count({ where: { section: section } });
    console.log(count);

    res.json({ count, products });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    res.json(product);
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
        return res.status(500).json({ message: err.message });
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const products = {
  getProduct,
  getProducts,
  createProduct,
};
