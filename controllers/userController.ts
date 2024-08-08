import { Express, Request, Response } from "express";

export class UserController {
    app : Express;
    path = '/user';

    constructor(app: Express) {
        this.app = app;
    }

    listenMethods () {
        this.app.get(`${this.path}`, (req: Request, res: Response) => {
            res.send("Método com userController");
        });
    }
}