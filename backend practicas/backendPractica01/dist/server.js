"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm run build
//npm start
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const puerto = process.env.PORT || 5555;
const app = (0, express_1.default)();
//rutas
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//Me pongo a escuchar:
app.listen(puerto, () => {
    console.log('El servidor está escuchando ' + puerto);
});
