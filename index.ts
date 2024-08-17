import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { UserController } from "./controllers/userController";
import bodyParser from "body-parser";
import { GCardController } from "./controllers/gCardController";

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

app.use(bodyParser.json());
app.use(express.static('public'));

const userController = new UserController(app);
const gCardController = new GCardController(app);

userController.listenMethods();
gCardController.listenMethods();


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});