import {Request, Response} from "express";
import { addReunion, getAllReuniones, deleteReunion } from "../repositories/reunion.respositories";

const agregarReunion = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const result = await addReunion(body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ msg: error || 'Ocurrió un error' });
    }
  };

const listarReuniones = async (req: Request, res: Response) => {
    try {
        const listado = await getAllReuniones();
        res.json(listado);
    } catch (error) {
        console.error('Error al listar reuniones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


const eliminarReunion = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const eliminada = await deleteReunion(Number(id));
      if (eliminada) {
        res.json({ msg: `La reunión fue eliminada con éxito` });
      } else {
        res.status(404).json({ msg: `No se encontró una reunión con el id ${id}` });
      }
    } catch (error) {
      console.error('Error al eliminar reunión:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

/*
const editarReunion = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    
    try {
        const reunion = await Reunion.findByPk(id);

        if (reunion){
            await reunion.update(body);
            res.json({msg: `La reunión fue editada con éxito`});
        } else 
            res.status(404).json({msg: `No se encontró una reunión con el id ${id}`});
   
        } catch (error) {
            console.log(error);
            res.json({
                msg:`Ocurrió un error`
        })
    }
}
*/
export { agregarReunion, listarReuniones, eliminarReunion};