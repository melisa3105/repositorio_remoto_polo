import {Router} from "express";
import { authUsuario } from "../controllers/auth.controllers";

const router = Router();

router.post('/', authUsuario); 

export default router;