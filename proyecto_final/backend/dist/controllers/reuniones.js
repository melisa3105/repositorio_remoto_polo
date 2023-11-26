//se toman los datos del request y son los datos con los que se va a trabajar, validar
const cargaReunion = (req, res) => {
    if (!req.body.dia) {
        res.status(400);
    }
    res.end("acá debería dar de alta una reunión");
};
const listadoReuniones = (req, res) => {
    res.end("acá debería traer las reuniones de un día");
};
const eliminacionReunion = (req, res) => {
    res.end("Estoy en el delete");
    //req.params.id
};
export { cargaReunion, listadoReuniones, eliminacionReunion };
