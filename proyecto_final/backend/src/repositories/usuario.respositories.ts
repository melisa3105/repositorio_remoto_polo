import { autenticarBaseDeDatos } from "../db/connection.sequelize";
import modeloUsuario from "../models/usuario.sequelize.models";

const getUsuario = async (name:string, pass:string) => {
    try {
        await autenticarBaseDeDatos();
        const usuario = await modeloUsuario.findOne({
            where: {
                name: name,
                pass: pass
            }
        });
        return usuario;
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
        throw new Error('Error interno del servidor');
      }
};

export { getUsuario };