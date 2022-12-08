import { Router } from "express";

import { methods as controllers } from "../controllers/users.controllers.js";
import { DsB as DashBoard } from "../controllers/DashBoard.controller.js";
import { auths as AuthCtrls } from "../controllers/Auth.controller.js";
const router = Router();

router.get("/", DashBoard.mainView);
router.get("/tables", DashBoard.tablesView);
router.get("/notifications", DashBoard.notifyView);

router.get("/users", controllers.getUsers);
router.get("/users/:id", controllers.getUser);

router.post("/users", controllers.createUser);
router.put("/users/:id", controllers.updateUser);
router.delete("/users/:id", controllers.deleteUser);
router.post("/signup", AuthCtrls.signUp);
router.post("/login", AuthCtrls.login);

export default router;
