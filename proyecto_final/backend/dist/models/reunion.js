"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Reunion = connection_1.default.define('Reunion', {
    dia: {
        type: sequelize_1.DataTypes.STRING
    },
    hora: {
        type: sequelize_1.DataTypes.INTEGER
    },
    duracion: {
        type: sequelize_1.DataTypes.INTEGER
    },
    detalle: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'Reuniones',
    createdAt: false,
    updatedAt: false
});
exports.default = Reunion;
