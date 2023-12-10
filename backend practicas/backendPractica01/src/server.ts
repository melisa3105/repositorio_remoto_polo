//npm run build
//npm start
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const puerto = process.env.PORT || 5555;
const app = express();

//rutas
app.get('/', (req,res) => {
    res.send('Hello World!');
});

//Me pongo a escuchar:
app.listen(puerto, ()=>{
    console.log('El servidor está escuchando '+puerto);
})
