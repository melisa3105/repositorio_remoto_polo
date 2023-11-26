// RUTAS: enlaza la ruta /reuniones con las funcionalidades dentro del archivo reunion.ts dentro de la carpeta CONTROLLERS según si es post, get, delete
import express, {Router} from "express";
import { cargaReunion, listadoReuniones, eliminacionReunion } from "../controllers/reuniones";


const router = express.Router();

router.post('/', cargaReunion);

router.get('/', listadoReuniones);

router.delete('/:id', eliminacionReunion);

export default router;