import { User } from "../models/User.js";
import { Product } from "../models/Product.js";

const getFavorites = async (req, res) => {
  const { id, onlyIDs } = req.params;

  try {
    const user = await User.findOne({
      where: {
        id,
      },
      attributes: ["id", "favorites", "name"],
    });
    const arrayOfStrings = user.favorites;
    const arrayOfNumbers = arrayOfStrings.map((string) => parseFloat(string));
    // console.log(onlyIDs);
    if (onlyIDs === "true") {
      return res.json(arrayOfNumbers);
    } else {
      const favs = await Product.findAll({
        where: {
          id: arrayOfNumbers,
        },
        attributes: ["id", "description", "price", "main_image", "section"],
      });

      return res.json(favs);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const { item } = req.body;
    const user = await User.findOne({
      where: {
        id,
      },
      attributes: ["favorites"],
    });
    const ancientData = user.favorites;
    ancientData.push(item);

    const updateFavs = await User.update(
      {
        favorites: ancientData,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json(ancientData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteFavorite = async (req, res) => {
  let updatedArray;
  try {
    const { id } = req.params;
    const { items } = req.body;

    const user = await User.findOne({
      where: {
        id,
      },
      attributes: ["favorites"],
    });
    const ancientData = user.favorites;
    updatedArray = ancientData.filter(
      (item) => !items.includes(parseInt(item))
    );

    await User.update(
      {
        favorites: updatedArray,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.json("Deleted!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteFavorites = async (req, res) => {
  try {
    const { id } = req.params;
    const { items } = req.body;

    await User.update(
      {
        favorites: items,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.json("Deleted items!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const favs = {
  getFavorites,
  addFavorite,
  deleteFavorite,
  deleteFavorites,
};
