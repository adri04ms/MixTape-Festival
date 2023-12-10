import express from 'express';
import * as servidor from './servidor.js';

const router = express.Router();

router.get("/", (req, res) => {
  res.render("paginaweb",{artistas: servidor.getArtistas()});
});
  
  
router.post("/nuevoelemento", (req, res) => {
  let { nombre, imagen, genero } = req.body;
  servidor.addArtista({ nombre, imagen, genero });
  res.render("Guardado");
}); 

//Sirve para obtener un cantante específico por su ID
router.get("/masInfo/:id", (req, res) => {
  let artista = servidor.getArtista(req.params.id);
  res.render("masinfo",{artista});
}); 


router.get("/masInfo/:id", (req, res) => {
  // req lo que enviamos - res lo que express nos responde
  let artista = servidor.getArtista(req.params.id); // 
  res.render("masInfo", { artista }); // Renderizar la plantilla 'equipos' con el equipo obtenido
});
 
router.get("/new", (req, res) => {
  // req lo que enviamos - res lo que express nos responde
  res.render("nuevo");
});  
 
router.post("/NuevoElementoGuardado", (req, res) => {
  let { nombre, imagen, genero, fecha, hora, descripcion, canciones } = req.body;
  let cancion = [];
  let id = teamService.addArtista({
    nombre,
    imagen, 
    genero,
    fecha, 
    hora, 
    descripcion, 
    canciones 
  }); 

  let artista = teamService.getArtista(req.params.id); 
  res.render("masinfo", { artista }); // Renderizar la plantilla 'equipos' 
 
});

 



export default router;
