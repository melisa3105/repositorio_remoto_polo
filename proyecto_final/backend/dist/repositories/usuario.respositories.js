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
exports.getUsuario = void 0;
const connection_sequelize_1 = require("../db/connection.sequelize");
const usuario_sequelize_models_1 = __importDefault(require("../models/usuario.sequelize.models"));
const getUsuario = (name, pass) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_sequelize_1.autenticarBaseDeDatos)();
        const usuario = yield usuario_sequelize_models_1.default.findOne({
            where: {
                name: name,
                pass: pass
            }
        });
        return usuario;
    }
    catch (error) {
        console.error('Error al obtener el usuario:', error);
        throw new Error('Error interno del servidor');
    }
});
exports.getUsuario = getUsuario;
