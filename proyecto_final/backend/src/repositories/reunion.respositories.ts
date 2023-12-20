import { autenticarBaseDeDatos } from "../db/connection.sequelize";
import modeloReunion from "../models/reunion.sequelize.models";

const addReunion = async (body: any) => {
  try {
    await autenticarBaseDeDatos();
    await modeloReunion.create(body);
    return {
      mensaje: 'La reunión ha sido agregada con éxito',
      body
    };
  } catch (error) {
    console.log(error);
    throw new Error('Ocurrió un error al agregar la reunión');
  }
};

const getAllReuniones = async () => {
    try {
        await autenticarBaseDeDatos();
        const listado = await modeloReunion.findAll({
          order: [['hora', 'ASC']]
        });
        return listado;
      } catch (error) {
        console.error('Error al obtener todas las reuniones:', error);
        throw new Error('Error interno del servidor');
      }
};

const deleteReunion = async (id: number) => {
    const reunion = await modeloReunion.findByPk(id);
    if (reunion) {
        await autenticarBaseDeDatos();
        await reunion.destroy();
        return true; // la reunión fue eliminada con éxito
    } else {
        return false; // no se encontró una reunión con el id especificado
    }
  };

export { addReunion, getAllReuniones, deleteReunion };