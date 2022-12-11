import { Cart } from "../models/Cart.js";

const getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const carrito = await Cart.findAll({
      where: {
        userId,
      },
    });
    if (!carrito) return res.status(404).json({ message: "cart not found" });
    return res.json(carrito);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const newCart = await Cart.create({
      userId,
    });
    res.json({ message: "success!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  const { userId } = req.params;
  const { data } = req.body;
  try {
    await Cart.update(
      { data },
      {
        where: {
          userId,
        },
      }
    );
    console.log(data);
    return res.json({ message: "success!,updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const cartMethods = {
  createCart,
  getCart,
  updateCart,
};
