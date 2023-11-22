"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RUTAS: enlaza la ruta /reunion con las funcionalidades dentro del archivo reunion.ts dentro de la carpeta CONTROLLERS según si es post, get, delete
var express_1 = require("express");
var reunion_1 = require("../controllers/reunion");
var router = express_1.default.Router();
router.post('/', reunion_1.cargaReunion);
router.get('/', reunion_1.listadoReuniones);
router.delete('/:id', reunion_1.eliminacionReunion);
exports.default = router;
