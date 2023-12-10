//npm run build
//npm start
//detengo ctrl + c

import express, {Request, Response} from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import rutaReuniones from "../routes/reuniones";
//import rutaLogin from "../routes/login";
//import jsonwebtoken from "jsonwebtoken";

dotenv.config();
const puerto = process.env.PORT || 5555;

const app = express();
/*
//Middleware autenticar auth:
function auth(req: Request, res: Response, next: any){
    const token = req.headers.authorization;
    if(token){
        const payload = jsonwebtoken.verify(token, "1234SECRETO_DEL_JWT");
        //console.log(payload);
        next();
    } else {
        res.status(401);
        res.end();
    }
}
*/
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.get('/', (req: Request,res: Response) => {
    res.send('Hello World 3!');
});

//app.use('/login', rutaLogin); // falta
//app.use('/reuniones', auth, rutaReuniones); //importado rutaReuniones //Servicio protegido que tiene que tener un token válido que obtengo de auth
app.use('/reuniones', rutaReuniones); //importado rutaReuniones //Servicio protegido que tiene que tener un token válido que obtengo de auth

app.listen(puerto,() => { console.log('El servidor está escuchando en puerto: '+puerto);});
