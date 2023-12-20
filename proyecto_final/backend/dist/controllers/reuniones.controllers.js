"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarReunion = exports.listarReuniones = exports.agregarReunion = void 0;
const reunion_respositories_1 = require("../repositories/reunion.respositories");
const agregarReunion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const result = yield (0, reunion_respositories_1.addReunion)(body);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ msg: error || 'Ocurrió un error' });
    }
});
exports.agregarReunion = agregarReunion;
const listarReuniones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listado = yield (0, reunion_respositories_1.getAllReuniones)();
        res.json(listado);
    }
    catch (error) {
        console.error('Error al listar reuniones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.listarReuniones = listarReuniones;
const eliminarReunion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const eliminada = yield (0, reunion_respositories_1.deleteReunion)(Number(id));
        if (eliminada) {
            res.json({ msg: `La reunión fue eliminada con éxito` });
        }
        else {
            res.status(404).json({ msg: `No se encontró una reunión con el id ${id}` });
        }
    }
    catch (error) {
        console.error('Error al eliminar reunión:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.eliminarReunion = eliminarReunion;
