//CONTROLLER LOGIN
import {Request, Response} from "express";
//se toman los datos del request y son los datos con los que se va a trabajar, validar

const acceder = (req: Request, res: Response) => {
    if (!req.body.dia) {
        res.status(400);
    }
    res.end("lógica login falta");
}

export { acceder};