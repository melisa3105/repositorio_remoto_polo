"use strict";
//npm start
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const reuniones_routes_1 = __importDefault(require("../routes/reuniones.routes"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
dotenv_1.default.config();
const puerto = process.env.PORT || 5555;
const app = (0, express_1.default)();
//Middleware verificar token:
function verificarToken(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const payload = jsonwebtoken_1.default.verify(token, "ESTE_ES_EL_SECRET_DEL_JWT_1234");
        console.log(payload);
        next();
    }
    else {
        res.status(401); //unauthorized
        console.log('No hay token');
        res.end();
    }
}
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use('/auth', auth_routes_1.default);
app.use('/reuniones', verificarToken, reuniones_routes_1.default);
app.listen(puerto, () => { console.log('El servidor está escuchando en puerto: ' + puerto); });
