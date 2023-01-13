import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/User.js";
import "./models/Product.js";
import "./models/SectionProduct.js";
import "./models/Cart.js";
import "./models/Reviews.js";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    await sequelize.sync({ alter: true });
    console.log("succesful connection!!");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port " + "jajaj");
    });
  } catch (e) {
    console.log(e);
  }
}

main();
