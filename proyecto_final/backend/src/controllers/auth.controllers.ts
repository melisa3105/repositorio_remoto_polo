import {Request, Response} from "express";
import { getUsuario } from "../repositories/usuario.respositories";
import jsonwebtoken from "jsonwebtoken";

const authUsuario = async (req: Request, res: Response) => {
    const {name, pass} = req.body;
    //const nombreUsuario = name; 
    //const contraseñaUsuario = pass;np
    console.log('3-Entró al authUsuario ',name, pass);
    try {
        const usuario = await getUsuario(name, pass);
        console.log('en auth controller: '+usuario);
        if(usuario){
            const payload = {
                name,
                iss: new Date()
            };
            const token = jsonwebtoken.sign(payload,'ESTE_ES_EL_SECRET_DEL_JWT_1234');
            console.log('BE el token es: ',token);
            //res.json({ token }); noooooooooooooooo
            //res.end(token); noooooooooooooo
            res.json( token );
        }
         else{
            res.status(401).json({ error: 'Usuario no encontrado. Name y/o pass inválidos' });
         }
    } catch (error) {
        console.error('Error al buscar el usuario', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export { authUsuario };

