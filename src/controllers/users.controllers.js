import { User } from "../models/User.js";

const getUsers = async (req, res) => {
  try {
    const data = await User.findAll();
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "not found" });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, password, mail, lastname } = req.body;
    const newUser = await User.create({
      name,
      password,
      mail,
      lastname,
    });
    res.json({ message: "success!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const { name, password, mail, lastname } = req.body;
    await User.update(
      { name, password, mail, lastname },
      {
        where: {
          id,
        },
      }
    );
    res.json({ message: "success!,updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.destroy({
      where: {
        id,
      },
    });
    res.json({ message: "success, deleted!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const methods = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
