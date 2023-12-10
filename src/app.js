import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import teamRouter from './teamRouter.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual (usando ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//pongo la pagina a escuchar peticiones en el puerto 3000
// Definir puerto
const port = process.env.PORT || 3000;

const app = express();
app.listen(port, () => {
  console.log("El servidor se encuentra en el puerto 3000");
});
dirname(__filename);


// Agregar router
app.use("/", teamRouter);

//Configuro mustache
app.set("views", join(__dirname + "/../views"));
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());

//Sirve para permitir a node analizar datos de formularios cuando está en true
app.use(bodyParser.urlencoded({ extended: true }));

//Sire para que la web pueda usar los archivos de la carpeta public
app.use(express.static(join(__dirname + "/../public")));

//Añado el router
app.use("/", teamRouter);