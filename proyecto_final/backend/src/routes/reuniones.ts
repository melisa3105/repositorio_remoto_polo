// RUTAS: enlaza la ruta /reuniones con las funcionalidades dentro del archivo reunion.ts dentro de la carpeta CONTROLLERS según si es post, get, delete
import {Router} from "express";
import { agregarReunion, listadoReuniones, eliminacionReunion } from "../controllers/reuniones";


const router = Router();

router.post('/agregar', agregarReunion);  

router.get('/listado', listadoReuniones);

router.delete('/eliminacion/:id', eliminacionReunion);

export default router;