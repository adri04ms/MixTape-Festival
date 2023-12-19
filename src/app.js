import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import teamRouter from './teamRouter.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

//Obtener el directorio actual (usando ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Sirve para que la web pueda usar archivos de la carpeta Public
app.use(express.static(join(__dirname, '/../public')));

//Defino el puerto en el que va a estar la pagina
const port = process.env.PORT || 3000;

//Sirve para permitir a node analizar datos de formularios cuando está en true
app.use(bodyParser.urlencoded({ extended: true }));

//Agregar el Router
app.use('/', teamRouter);

//Configuración del mustache
app.set('views', join(__dirname, '/../views'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

//Pongo la pagina a escuchar en el puerto 3000
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});
