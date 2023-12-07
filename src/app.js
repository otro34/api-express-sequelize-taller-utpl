import express from 'express';
import bodyParser from 'body-parser';
import cursoRouter from './rutas/curso.ruta.js';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.json({ message: 'Hola Mundo' });
})

app.use("/cursos", cursoRouter);

export default app;