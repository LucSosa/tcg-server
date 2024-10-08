import { Express, Request, Response } from "express";
import { GCardService } from "../services/gCardService";

export class GCardController {
    app : Express;
    path = '/gcard';
    gCardService = new GCardService();

    constructor(app: Express) {
        this.app = app;
    }

    listenMethods () {
        this.httpGetMethods();
        this.httpPostMethods();
    }

    private httpGetMethods () {
        this.app.get(`${this.path}/:gcardId`, (req: Request, res: Response) => {
            try {
                const gcard = this.gCardService.getGCard(req.params.gcardId);

                if(gcard) {
                    res.send(gcard);
                } else {
                    res.statusCode = 404;
                    res.send({error: 'Not Found'});
                }
            } catch (e) {
                throw e;
            }
        });

        this.app.get(`${this.path}`, (req: Request, res: Response) => {
            try {
                const gcards = this.gCardService.getGCards();
                    res.send(gcards);
            } catch (e) {
                throw e;
            }
        });
    }

    private httpPostMethods () {
    //    this.app.post(`${this.path}`, (req: Request, res: Response) => {
    //        try {
    //            const saved = this.userService.addUser(req.body);
    //            
    //            res.send(saved);
    //        } catch(e) {
    //            res.statusCode = 500;
    //            res.send({error: 'It was not possible to register now'});
    //        }
    //    });

        
    }
}