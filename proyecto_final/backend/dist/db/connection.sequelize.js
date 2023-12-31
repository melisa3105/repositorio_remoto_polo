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
exports.autenticarBaseDeDatos = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('adm_reuniones', 'root', '2005malena', {
    host: 'localhost',
    dialect: 'mysql'
});
function autenticarBaseDeDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.authenticate();
            console.log('Base de datos conectada');
        }
        catch (error) {
            console.error('Error al autenticar la base de datos:', error);
        }
    });
}
exports.autenticarBaseDeDatos = autenticarBaseDeDatos;
exports.default = sequelize;
