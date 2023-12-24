//npm start
//detengo ctrl + c

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
    
    const token = req.headers.authorization; console.log('token que hay que verificar:',token);
            
    if(token){ //agregar try catch
        const payload = jsonwebtoken.verify(token, "ESTE_ES_EL_SECRET_DEL_JWT_1234");
        console.log(payload);
        next(); // te deja seguir
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

app.use('/reuniones', verificarToken, rutaReuniones); //importado rutaReuniones //Servicio protegido que tiene que tener un token válido que obtengo de auth
//app.use('/reuniones', rutaReuniones); //importado rutaReuniones //Servicio protegido que tiene que tener un token válido que obtengo de auth

app.listen(puerto,() => { console.log('El servidor está escuchando en puerto: '+ puerto);});