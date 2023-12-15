"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RUTAS: enlaza la ruta /reuniones con las funcionalidades dentro del archivo reunion.ts dentro de la carpeta CONTROLLERS según si es post, get, delete
const express_1 = require("express");
const reuniones_1 = require("../controllers/reuniones");
const router = (0, express_1.Router)();
router.post('/agregar', reuniones_1.agregarReunion);
router.get('/listar', reuniones_1.listarReuniones);
router.delete('/eliminar/:id', reuniones_1.eliminarReunion);
router.put('/editar/:id', reuniones_1.editarReunion);
exports.default = router;
