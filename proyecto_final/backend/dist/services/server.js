"use strict";
//npm run build
//npm start
//detengo ctrl + c
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const reuniones_1 = __importDefault(require("../routes/reuniones"));
//import rutaLogin from "../routes/login";
//import jsonwebtoken from "jsonwebtoken";
dotenv_1.default.config();
const puerto = process.env.PORT || 5555;
const app = (0, express_1.default)();
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
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.get('/', (req, res) => {
    res.send('Hello World 3!');
});
//app.use('/login', rutaLogin); // falta
//app.use('/reuniones', auth, rutaReuniones); //importado rutaReuniones //Servicio protegido que tiene que tener un token válido que obtengo de auth
app.use('/reuniones', reuniones_1.default); //importado rutaReuniones //Servicio protegido que tiene que tener un token válido que obtengo de auth
app.listen(puerto, () => { console.log('El servidor está escuchando en puerto: ' + puerto); });
