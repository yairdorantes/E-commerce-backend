import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUp = async (req, res) => {
  try {
    const { name, mail, lastname } = req.body;
    let password = bcrypt.hashSync(req.body.password, 10);
    const validateEmail = await User.findOne({
      where: {
        mail,
      },
    });

    console.log(validateEmail);
    if (validateEmail) {
      return res.status(401).json({ message: "email already exists" });
    } else {
      const newUser = await User.create({
        name,
        password,
        mail,
        lastname,
      });
      let token = jwt.sign({ newUser }, "secret", { expiresIn: "7d" });

      res.json({ newUser, token });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { mail, password } = req.body;

    const userFound = await User.findOne({
      where: {
        mail,
      },
    });
    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    } else {
      if (bcrypt.compareSync(password, userFound.password)) {
        const sendData = {
          id: userFound.id,
          name: userFound.name,
          mail: userFound.mail,
          lastname: userFound.lastname,
        };
        const token = jwt.sign({ user: sendData }, "secret", {
          expiresIn: "7d",
        });
        return res.status(200).json({ token });
      } else {
        return res.status(401).json({ message: "invalid password" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message + req.body });
  }
};

export const auths = {
  signUp,
  login,
};
