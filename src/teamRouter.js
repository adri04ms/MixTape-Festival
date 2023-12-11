import express from 'express';
import * as servidor from './servidor.js';

const router = express.Router();

router.get("/", (req, res) => {
  res.render("paginaweb",{artistas: servidor.getArtistas()});
});
  

//Sirve para obtener un cantante específico por su ID
router.get("/masInfo/:id", (req, res) => {
  let artista = servidor.getArtista(req.params.id);
  res.render("masinfo",{artista});
}); 

 
router.get("/nuevo", (req, res) => {
  // req lo que enviamos - res lo que express nos responde
  res.render("nuevoelemento");
});  
 

router.post("/newElemento", (req, res) => {
  let {nombre, imagen, genero, fecha, hora, descripcion } = req.body;
  let canciones = [];
  let artista = servidor.getArtista(servidor.addArtista({nombre, imagen, genero, fecha, hora, descripcion,canciones}));
  res.render("masinfo",{artista});
});

router.post("/nuevaCancion/:id", (req, res) => {
  let {nombre, duracion, lanzamiento, colaborador} = req.body;
  let nuevaCancion = ({nombre, duracion, lanzamiento, colaborador});
  servidor.addCancion(req.params.id,nuevaCancion)
  let artista = servidor.getArtista(req.params.id);
  res.render("masinfo",{artista});
});

router.get("/editar/:id", (req, res) => {
  let artista = servidor.getArtista(req.params.id);
  res.render("editarelemento",{artista});
}); 


router.post("/update/:id", (req, res) => {
  let { nombre, imagen, genero, fecha, hora, descripcion } = req.body;
  let artista = ({nombre, imagen, genero, fecha, hora, descripcion});
  servidor.editArtista(req.params.id,artista);
  artista = servidor.getArtista(req.params.id);
  res.render("masInfo",{artista});
});

router.get("/masInfo/:id/borrar", (req, res) => {
  servidor.deleteArtista(req.params.id); 
  res.redirect("/"); 
});


export default router;
