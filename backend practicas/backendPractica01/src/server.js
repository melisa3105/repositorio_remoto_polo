import express from 'express';

const app = express();

//rutas
app.get('/', (req,res) => {
    res.send('Hello World!');
});

//Me pongo a escuchar:
app.listen(4000, ()=>{
    console.log('El servidor está escuchando');
})