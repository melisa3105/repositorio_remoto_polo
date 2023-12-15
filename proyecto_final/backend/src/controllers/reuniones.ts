//CONTROLLERS
import {Request, Response} from "express";
import Reunion from "../models/reunion";

const agregarReunion = async (req: Request, res: Response) => {
 //   if (!req.body.dia) {
  //      res.status(400);
  //  }
    const { body } = req;

    try{
        await Reunion.create(body);
        res.json({
            mensaje: 'La reunión ha sido agregada con éxito',
            body
        })
        } catch (error){
            console.log(error);
            res.json({
                msg:`Ocurrió un error`
            })
    }
}

const listarReuniones = async (req: Request, res: Response) => {
    try {
        const listado = await Reunion.findAll({
            order: [['hora', 'ASC']] 
        });

        res.json(listado);
    } catch (error) {
        console.error('Error al listar reuniones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


const eliminarReunion = async (req: Request, res: Response) => {
    //req.params.id
    const { id } = req.params;
    const reunion = await Reunion.findByPk(id);

    if (reunion){
        await reunion.destroy();
        res.json({msg: `La reunión fue eliminada con éxito`});
    } else 
            res.status(404).json({msg: `No se encontró una reunión con el id ${id}`});
    
}

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