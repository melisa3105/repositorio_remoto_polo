"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUsuario = void 0;
const usuario_respositories_1 = require("../repositories/usuario.respositories");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, pass } = req.body;
    //const nombreUsuario = name; // Reemplaza esto con el nombre de usuario real
    //const contraseñaUsuario = pass; // Reemplaza esto con la contraseña real
    console.log('3-Entró al authUsuario ', name, pass);
    try {
        const usuario = yield (0, usuario_respositories_1.getUsuario)(name, pass);
        console.log('en auth controller: ' + usuario);
        if (usuario) {
            const payload = {
                name,
                iss: new Date()
            };
            const token = jsonwebtoken_1.default.sign(payload, 'ESTE_ES_EL_SECRET_DEL_JWT_1234');
            console.log('BE el token es: ', token);
            res.json({ token });
        }
        else {
            res.status(401).json({ error: 'Usuario no encontrado. Name y/o pass inválidos' });
        }
    }
    catch (error) {
        console.error('Error al buscar el usuario', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.authUsuario = authUsuario;
