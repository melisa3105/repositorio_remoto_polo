"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceder = void 0;
//se toman los datos del request y son los datos con los que se va a trabajar, validar
const acceder = (req, res) => {
    if (!req.body.dia) {
        res.status(400);
    }
    res.end("lógica login falta");
};
exports.acceder = acceder;
