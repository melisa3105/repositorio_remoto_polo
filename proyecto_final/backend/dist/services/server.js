import express from "express";
import morgan from "morgan";
import cors from "cors";
//import rutaReuniones from "../routes/reuniones";
//import rutaLogin from "../routes/login";
import jsonwebtoken from "jsonwebtoken";
const puerto = process.env.PORT || 5555;
const app = express();
//Middleware autenticar auth:
function auth(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const payload = jsonwebtoken.verify(token, "1234SECRETO_DEL_JWT");
        console.log(payload);
    }
    else {
        res.status(401);
        res.end();
    }
}
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//app.use('/login', rutaLogin); // falta
//app.use('/reuniones', auth, rutaReuniones); //importado rutaReuniones
app.listen(puerto, () => { console.log('El servidor está escuchando en puerto: ' + puerto); });
