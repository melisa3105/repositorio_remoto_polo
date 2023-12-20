"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_sequelize_1 = __importDefault(require("../db/connection.sequelize"));
const modeloUsuario = connection_sequelize_1.default.define('Usuario', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    pass: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    tableName: 'usuarios',
    createdAt: false,
    updatedAt: false
});
exports.default = modeloUsuario;
