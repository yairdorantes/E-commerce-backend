import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";

const getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const carrito = await Cart.findAll({
      where: {
        userId,
      },
    });
    let products = [];
    carrito[0].data.map((item) => {
      products.push(item.id);
    });

    const checkProducts = await Product.findAll({
      where: {
        id: products,
      },
    });

    checkProducts.map((product, key) => {
      console.log(product.id);
      // if (carrito[key].data[key].price != checkProducts[key].data[key].price) {
      //   console.log("cambio");
      // } else {
      //   console.log("no changes");
      // }
    });

    // console.log(checkProducts[0]);
    res.json({ checkProducts, carrito });
    // if (!carrito) return res.status(404).json({ message: "cart not found" });
    return res.json(carrito[0].data[0].price);
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
