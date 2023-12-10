//CONTROLLERS
import {Request, Response} from "express";

const agregarReunion = (req: Request, res: Response) => {
 //   if (!req.body.dia) {
  //      res.status(400);
  //  }
    const { body } = req;

    console.log(body);
    res.json({
        mensaje: 'Estamos en agregar reunión',
        body
    })
    //res.end("acá debería dar de alta una reunión");
}

const listadoReuniones = (req: Request, res: Response) => {
    //res.json({mensaje: 'listadoReuniones aquí'})
    res.end("acá debería traer las reuniones -de un día");
}


const eliminacionReunion = (req: Request, res: Response) => {
    //req.params.id
    const { id } = req.params;
    
    res.json({
        mensaje: 'Estamos en la eliminación de una reunión',
        id
    })
    res.end("Estoy en el delete")
    
}

export { agregarReunion, listadoReuniones, eliminacionReunion};