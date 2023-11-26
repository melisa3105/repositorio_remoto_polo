// RUTAS: enlaza la ruta /login con las funcionalidades dentro del archivo login.ts dentro de la carpeta CONTROLLERS
import express, {Router} from "express";
import { acceder } from "../controllers/login";


const router = express.Router();

router.get('/', acceder); // o post?

export default router;