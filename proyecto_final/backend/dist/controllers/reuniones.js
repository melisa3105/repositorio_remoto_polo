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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarReunion = exports.eliminarReunion = exports.listarReuniones = exports.agregarReunion = void 0;
const reunion_1 = __importDefault(require("../models/reunion"));
const agregarReunion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   if (!req.body.dia) {
    //      res.status(400);
    //  }
    const { body } = req;
    try {
        yield reunion_1.default.create(body);
        res.json({
            mensaje: 'La reunión ha sido agregada con éxito',
            body
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un error`
        });
    }
});
exports.agregarReunion = agregarReunion;
const listarReuniones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listado = yield reunion_1.default.findAll({
            order: [['hora', 'ASC']]
        });
        res.json(listado);
    }
    catch (error) {
        console.error('Error al listar reuniones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.listarReuniones = listarReuniones;
const eliminarReunion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //req.params.id
    const { id } = req.params;
    const reunion = yield reunion_1.default.findByPk(id);
    if (reunion) {
        yield reunion.destroy();
        res.json({ msg: `La reunión fue eliminada con éxito` });
    }
    else
        res.status(404).json({ msg: `No se encontró una reunión con el id ${id}` });
});
exports.eliminarReunion = eliminarReunion;
const editarReunion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const reunion = yield reunion_1.default.findByPk(id);
        if (reunion) {
            yield reunion.update(body);
            res.json({ msg: `La reunión fue editada con éxito` });
        }
        else
            res.status(404).json({ msg: `No se encontró una reunión con el id ${id}` });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un error`
        });
    }
});
exports.editarReunion = editarReunion;
