import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import teamRouter from './teamRouter.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.static(join(__dirname, '/../public')));


const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', teamRouter);


app.set('views', join(__dirname, '/../views'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());


app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});
