import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/User.js";
import "./models/Cart.js";
import "./models/Product.js";
import "./models/SectionProduct.js";
async function main() {
  try {
    await sequelize.sync({ alter: true });
    console.log("succesful connection!!");
    app.listen(4000, () => {
      console.log("Server is running on port " + "jajaj");
    });
    // QueryInterface.removeColumn("Carts");
  } catch (e) {
    console.log(e);
  }
}

main();
