"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_sequelize_1 = __importDefault(require("../db/connection.sequelize"));
const modeloReunion = connection_sequelize_1.default.define('Reunion', {
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
    tableName: 'reuniones',
    createdAt: false,
    updatedAt: false
});
exports.default = modeloReunion;
