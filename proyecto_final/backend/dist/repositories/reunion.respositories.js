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
exports.deleteReunion = exports.getAllReuniones = exports.addReunion = void 0;
const connection_sequelize_1 = require("../db/connection.sequelize");
const reunion_sequelize_models_1 = __importDefault(require("../models/reunion.sequelize.models"));
const addReunion = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_sequelize_1.autenticarBaseDeDatos)();
        yield reunion_sequelize_models_1.default.create(body);
        return {
            mensaje: 'La reunión ha sido agregada con éxito',
            body
        };
    }
    catch (error) {
        console.log(error);
        throw new Error('Ocurrió un error al agregar la reunión');
    }
});
exports.addReunion = addReunion;
const getAllReuniones = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_sequelize_1.autenticarBaseDeDatos)();
        const listado = yield reunion_sequelize_models_1.default.findAll({
            order: [['hora', 'ASC']]
        });
        return listado;
    }
    catch (error) {
        console.error('Error al obtener todas las reuniones:', error);
        throw new Error('Error interno del servidor');
    }
});
exports.getAllReuniones = getAllReuniones;
const deleteReunion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const reunion = yield reunion_sequelize_models_1.default.findByPk(id);
    if (reunion) {
        yield (0, connection_sequelize_1.autenticarBaseDeDatos)();
        yield reunion.destroy();
        return true; // la reunión fue eliminada con éxito
    }
    else {
        return false; // no se encontró una reunión con el id especificado
    }
});
exports.deleteReunion = deleteReunion;
