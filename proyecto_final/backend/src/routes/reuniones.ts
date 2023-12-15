// RUTAS: enlaza la ruta /reuniones con las funcionalidades dentro del archivo reunion.ts dentro de la carpeta CONTROLLERS según si es post, get, delete
import {Router} from "express";
import { agregarReunion, listarReuniones, eliminarReunion } from "../controllers/reuniones";


const router = Router();

router.post('/agregar', agregarReunion);  

router.get('/listar', listarReuniones);

router.delete('/eliminar/:id', eliminarReunion);

//router.put('/editar/:id', editarReunion);

export default router;