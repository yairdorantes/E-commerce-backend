import { Router } from "express";

import { methods as controllers } from "../controllers/users.controllers.js";
import { DsB as DashBoard } from "../controllers/DashBoard.controller.js";
import { auths as AuthCtrls } from "../controllers/Auth.controller.js";
import { cartMethods as CartCtrls } from "../controllers/Cart.controller.js";
import { products as ProductCtrls } from "../controllers/Products.controller.js";
import { favs as FavoritesCtrls } from "../controllers/Favorites.controller.js";
import { searchs as SearchCtrls } from "../controllers/Searching.controller.js";

const router = Router();

router.get("/", DashBoard.mainView);
router.get("/tables", DashBoard.tablesView);
router.get("/notifications", DashBoard.notifyView);
////////
//USERS
router.get("/users", controllers.getUsers);
router.get("/users/:id", controllers.getUser);
router.post("/users", controllers.createUser);
router.put("/users/:id", controllers.updateUser);
router.delete("/users/:id", controllers.deleteUser);
/////SESION
router.post("/signup", AuthCtrls.signUp);
router.post("/login", AuthCtrls.login);
//CART
router.post("/newCart", CartCtrls.createCart);
router.get("/cart/:userId", CartCtrls.getCart);
router.post("/updateCart/:userId", CartCtrls.updateCart);
///PRODUCTS
router.get("/product/:id", ProductCtrls.getProduct);
router.get("/products-list/:from/:amount/:section", ProductCtrls.getProducts);
router.post("/create-product", ProductCtrls.createProduct);
///FAVORITES

router.get("/favorites/:id/:onlyIDs", FavoritesCtrls.getFavorites);
router.post("/favorites/:id", FavoritesCtrls.addFavorite);
router.delete("/favorites/:id", FavoritesCtrls.deleteFavorite);
router.delete("/del-favorites/:id", FavoritesCtrls.deleteFavorites);
////SEARCH PRODUCTS
router.get("/search/:query", SearchCtrls.searchProduct);

export default router;
