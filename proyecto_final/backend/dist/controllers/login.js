//se toman los datos del request y son los datos con los que se va a trabajar, validar
const acceder = (req, res) => {
    if (!req.body.dia) {
        res.status(400);
    }
    res.end("lógica login falta");
};
export { acceder };
