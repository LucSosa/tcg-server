import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { UserController } from "./controllers/userController";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
})

app.use(bodyParser.json())

const userController = new UserController(app);
userController.listenMethods();


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});