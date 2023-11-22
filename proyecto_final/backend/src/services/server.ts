import express from "express";
import rutaReunion from "../routes/reunion";

const puerto = process.env.PORT || 5555;

const app = express();

app.use(express.json());

app.use('/reunion', rutaReunion);

app.listen(puerto,() => { console.log('El servidor está escuchando en puerto: '+puerto);});
