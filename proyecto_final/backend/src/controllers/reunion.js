"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminacionReunion = exports.listadoReuniones = exports.cargaReunion = void 0;
//se toman los datos del request y son los datos con los que se va a trabajar, validar
var cargaReunion = function (req, res) {
    if (!req.body.dia) {
        res.status(400);
    }
    res.end("acá debería dar de alta una reunión");
};
exports.cargaReunion = cargaReunion;
var listadoReuniones = function (req, res) {
    res.end("acá debería traer las reuniones de un día");
};
exports.listadoReuniones = listadoReuniones;
var eliminacionReunion = function (req, res) {
    res.end("Estoy en el delete");
    //req.params.id
};
exports.eliminacionReunion = eliminacionReunion;
