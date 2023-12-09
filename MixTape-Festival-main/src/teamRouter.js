import express from 'express';
import * as servidor from './servidor.js';

const router = express.Router();

router.get("/", (req, res) => {
  res.render("paginaweb",{ 
    artistas: servidor.getArtistas() 
});
});


router.post("/nuevoelemento", (req, res) => {
  let { nombre, imagen, genero } = req.body;
  servidor.addArtista({ nombre, imagen, genero });
  res.render("Guardado");
});

//Sirve para obtener un cantante específico por su ID
router.get("/masInfo/:id", (req, res) => {
  let artista = servidor.getArtista(req.params.id);
  res.render("masinfo", { artista });
});

export default router;
