import express from "express";
import commerceRoutes from "./routes/ecommerce.routes.js";
import path from "path";

import cors from "cors";
const app = express();
app.use(cors());
// console.log(__dirname + "tamadres");
app.use(
  express.static(path.join("/home/yair/Desktop/API Ecommerce", "public"))
);

app.use(express.json());

app.use("/api/", commerceRoutes);

export default app;
