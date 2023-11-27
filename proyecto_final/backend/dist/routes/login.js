// RUTAS: enlaza la ruta /login con las funcionalidades dentro del archivo login.ts dentro de la carpeta CONTROLLERS
import express from "express";
import { acceder } from "../controllers/login";
const router = express.Router();
router.post('/', acceder); // o get?
export default router;
