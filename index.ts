import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { UserController } from "./controllers/userController";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const userController = new UserController(app);
userController.listenMethods();


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});