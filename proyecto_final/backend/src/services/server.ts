//npm start

import express, {NextFunction, Request, Response} from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import rutaReuniones from "../routes/reuniones.routes";
import rutaAuth from "../routes/auth.routes";

dotenv.config();
const puerto = process.env.PORT || 5555;

const app = express();

//Middleware verificar token:
function verificarToken(req: Request, res: Response, next: NextFunction){
    
    const token = req.headers.authorization; 
            
    if(token){ 
        const payload = jsonwebtoken.verify(token, "ESTE_ES_EL_SECRET_DEL_JWT_1234");
        console.log(payload);
        next(); 
    } else {
        res.status(401); //unauthorized
        console.log('No hay token');
        res.end();
    }
}

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use('/auth', rutaAuth); 

app.use('/reuniones', verificarToken, rutaReuniones); 

app.listen(puerto,() => { console.log('El servidor está escuchando en puerto: '+ puerto);});