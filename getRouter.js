import express from 'express'; 
import * as servidor from './servidor'; 

const router = express.Router(); 

router.get('/', (req, res) => {
    const elemento = servidor.getElemento(0, 15); 
    res.render('index', {elemento: elemento});
}); 

router.get('/nuevo', (req, res) => {
    res.render('nuevoelemento'); 
}); 

router.post('/nuevoelemento', (req, res) => {
    console.log(req.bady); 
    let {nombre, descripcion, genero, fecha, hora, imagen} = req.body; 
    servidor.elemento({nombre, genero, imagen}); 
    res.render('Guardado')
});

//Sirve para obtener un cantante específico por su ID
router.get('/masInfo/:id', (req, res) => {
    let elemento = servidor.elemento(req.params.id);
    console.log(elemento); 
    res.render('masinfo', {elemento});
});

export default router; 