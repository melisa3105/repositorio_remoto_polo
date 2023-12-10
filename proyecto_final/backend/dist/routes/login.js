"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// RUTAS: enlaza la ruta /login con las funcionalidades dentro del archivo login.ts dentro de la carpeta CONTROLLERS
const express_1 = __importDefault(require("express"));
const login_1 = require("../controllers/login");
const router = express_1.default.Router();
router.post('/', login_1.acceder); // o get?
exports.default = router;
