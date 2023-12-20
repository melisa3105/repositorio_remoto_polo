"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('adm_reuniones', 'root', '2005malena', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
/*

*/
/*
const sequelize = new Sequelize(
process.env.DB_DB!,
process.env.DB_USER!,
process.env.DB_PASS!, {
  host: process.env.DB_HOST!,
  dialect: 'mysql'
}
);
*/ 
