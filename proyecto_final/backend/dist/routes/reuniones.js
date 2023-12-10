"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RUTAS: enlaza la ruta /reuniones con las funcionalidades dentro del archivo reunion.ts dentro de la carpeta CONTROLLERS según si es post, get, delete
const express_1 = require("express");
const reuniones_1 = require("../controllers/reuniones");
const router = (0, express_1.Router)();
router.post('/agregar', reuniones_1.agregarReunion);
router.get('/listado', reuniones_1.listadoReuniones);
router.delete('/eliminacion/:id', reuniones_1.eliminacionReunion);
exports.default = router;
