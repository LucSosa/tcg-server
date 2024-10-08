import { Express, Request, Response } from "express";
import { UserService } from "../services/userService";
import { User } from "../repositories/userRepository";
import { DeckService } from "../services/deckService";

export class UserController {
    app : Express;
    path = '/user';
    userService = new UserService();
    deckService = new DeckService();

    constructor(app: Express) {
        this.app = app;
    }

    listenMethods () {
        this.httpGetMethods();
        this.httpPostMethods();
    }

    private httpGetMethods () {
        this.app.get(`${this.path}/:username`, (req: Request, res: Response) => {
            try {
                const user = this.userService.getUser(req.params.username);

                if(user) {
                    res.send(this.removePassword(user));
                } else {
                    res.statusCode = 404;
                    res.send({error: 'Not Found'});
                }
            } catch (e) {
                throw e;
            }
        });

        this.app.get(`${this.path}/:userId/deck`, (req: Request, res: Response) => {
            try {
                const deck = this.deckService.getUserDeck(req.params.userId);

                if(deck) {
                    res.send(deck);
                } else {
                    res.statusCode = 404;
                    res.send({error: 'Not Found'});
                }
            } catch (e) {
                throw e;
            }
        });
    }

    private httpPostMethods () {
        this.app.post(`${this.path}`, (req: Request, res: Response) => {
            try {
                const saved = this.userService.addUser(req.body);
                
                res.send(saved);
            } catch(e) {
                res.statusCode = 500;
                res.send({error: 'It was not possible to register now'});
            }
        });

        this.app.post(`${this.path}/authenticate`, (req: Request, res: Response) => {
            const user = this.userService.authenticateUser(req.body);

            if(user) {
                res.send(this.removePassword(user));
            } else {
                res.send(null);
            }
        });
    }

    removePassword(user: User) {
        const userRestrict = {...user};
        delete userRestrict.password;

        return userRestrict;
    }
}