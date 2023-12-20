import {Router} from "express";
import { agregarReunion, listarReuniones, eliminarReunion } from "../controllers/reuniones.controllers";


const router = Router();

router.post('/agregar', agregarReunion);  

router.get('/listar', listarReuniones);

router.delete('/eliminar/:id', eliminarReunion);

//router.put('/editar/:id', editarReunion);

export default router;