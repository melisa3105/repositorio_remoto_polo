"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminacionReunion = exports.listadoReuniones = exports.agregarReunion = void 0;
//se toman los datos del request y son los datos con los que se va a trabajar, validar. Se devuelve res
const agregarReunion = (req, res) => {
    //   if (!req.body.dia) {
    //      res.status(400);
    //  }
    const { body } = req;
    console.log(body);
    res.json({
        mensaje: 'Estamos en agregar reunión',
        body
    });
    //res.end("acá debería dar de alta una reunión");
};
exports.agregarReunion = agregarReunion;
const listadoReuniones = (req, res) => {
    //res.json({mensaje: 'listadoReuniones aquí'})
    res.end("acá debería traer las reuniones -de un día");
};
exports.listadoReuniones = listadoReuniones;
const eliminacionReunion = (req, res) => {
    res.end("Estoy en el delete");
    //req.params.id
};
exports.eliminacionReunion = eliminacionReunion;
