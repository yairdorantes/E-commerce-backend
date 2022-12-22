import { Product } from "../models/Product.js";
import { Reviews } from "../models/Reviews.js";
const getReviews = async (req, res) => {
  const { product } = req.params;
  try {
    const data = await Reviews.findAll({
      where: { product },
    });
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createReview = async (req, res) => {
  try {
    const entries = Object.entries(req.body);
    const { product, rating } = req.body;

    const findProduct = await Product.findByPk(product);

    findProduct.increment("rate", { by: rating });
    findProduct.increment("rate_count", { by: 1 });

    Reviews.create(Object.fromEntries(entries))
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

export const reviews = {
  getReviews,
  createReview,
};
