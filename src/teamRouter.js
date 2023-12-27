import express from 'express';
import { body, validationResult } from 'express-validator';
import * as servidor from './servidor.js';

const router = express.Router();

router.get("/", (req, res) => {
  res.render('paginaweb', {artistas: servidor.getArtistas(0,4)});
});

router.get('/servidor', (req, res) => {

  const from = parseInt(req.query.from);
  const to = parseInt(req.query.to);

  const artistas = servidor.getArtistas(from,to);

  res.render('artistas', {artistas: artistas});
});

//Sirve para obtener un cantante específico por su ID
router.get("/masInfo/:id", (req, res) => {
  let artista = servidor.getArtista(req.params.id);
  res.render("masinfo",{artista});
}); 

 
router.get("/nuevo", (req, res) => {
  res.render("nuevoelemento");
});  
 
router.post('/newElemento', [
  // Validar el nombre
  body("nombre")
    .notEmpty().withMessage('El nombre no debe estar vacío')
    .matches(/^[A-Z][a-zA-Z ]*$/).withMessage('El nombre debe empezar con una letra mayúscula'),

  // Validar ladescripción
  body("descripcion")
    .notEmpty().withMessage('La descripción no debe estar vacío')
    .isLength({ min: 50, max: 500 }).withMessage('La descripción debe contener entre 50 y 500 caracteres'),

  // Validar la URL de imagen
  body("imagen")
    .notEmpty().withMessage('El URL de imagen no debe estar vacío')
    .isURL().withMessage('El URL de imagen debe ser una URL válida'),

  // Validar el genero
  body("genero")
    .notEmpty().withMessage('El género no debe estar vacío'),

  // Validar fecha
  body("fecha")
  .notEmpty().withMessage('La fecha no debe estar vacía'),

  // Validar el genero
  body("hora")
  .notEmpty().withMessage('La hora no debe estar vacía')

], (req, res) => {

  let { nombre, imagen, genero, fecha, hora, descripcion } = req.body;
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("nuevoelemento", { artista: { nombre, imagen, genero, fecha, hora, descripcion }, errors: errors.array() });
  } else {
    let canciones = [];
    let artista = servidor.getArtista(servidor.addArtista({ nombre, imagen, genero, fecha, hora, descripcion, canciones }));
    res.render("masinfo", { artista });
  }
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
  
  if (artista.genero === "POP ESPAÑOL"){
    artista.genero = {POP_ESPANYOL : true}
  }
  else if (artista.genero === "POP"){
    artista.genero = {POP : true}
  }
  else if (artista.genero === "REGGUETON"){
    artista.genero = {REGGUETON : true}
  }
  else if (artista.genero === "RAP"){
    artista.genero = {RAP : true}
  }
  else if (artista.genero === "ROCK"){
    artista.genero = {ROCK : true}
  }
  else if (artista.genero === "INDIE"){
    artista.genero = {INDIE: true}
  }
  else if (artista.genero === "ALTERNATIVO"){
    artista.genero = {ALTERNATIVO : true}
  }
  else if (artista.genero === "HIP HOP"){
    artista.genero = {HIP_HOP : true}
  }
  else if (artista.genero === "METAL"){
    artista.genero = {METAL: true}
  }
  else if (artista.genero === "JAZZ"){
    artista.genero = {JAZZ : true}
  }
  else if (artista.genero === "TRAP LATINO"){
    artista.genero = {TRAP_LATINO: true}
  }
  res.render("nuevoelemento",{artista});
}); 


router.post("/update/:id", [
  // Validar el nombre
  body("nombre")
    .notEmpty().withMessage('El nombre no debe estar vacío')
    .matches(/^[A-Z][a-zA-Z ]*$/).withMessage('El nombre debe empezar con una letra mayúscula'),

  // Validar ladescripción
  body("descripcion")
    .notEmpty().withMessage('La descripción no debe estar vacío')
    .isLength({ min: 50, max: 500 }).withMessage('La descripción debe contener entre 50 y 500 caracteres'),

  // Validar la URL de imagen
  body("imagen")
    .notEmpty().withMessage('El URL de imagen no debe estar vacío')
    .isURL().withMessage('El URL de imagen debe ser una URL válida'),

  // Validar el genero
  body("genero")
    .notEmpty().withMessage('El género no debe estar vacío'),

  // Validar fecha
  body("fecha")
  .notEmpty().withMessage('La fecha no debe estar vacía'),

  // Validar el genero
  body("hora")
  .notEmpty().withMessage('La hora no debe estar vacía')

], (req, res) => {
  let { nombre, imagen, genero, fecha, hora, descripcion } = req.body;
  let artista = ({ nombre, imagen, genero, fecha, hora, descripcion });
  let errors = validationResult(req);
  let id = req.params.id;
  if (!errors.isEmpty()) {
    if (artista.genero === "POP ESPAÑOL"){
      artista.genero = {POP_ESPANYOL : true}
    }
    else if (artista.genero === "POP"){
      artista.genero = {POP : true}
    }
    else if (artista.genero === "REGGUETON"){
      artista.genero = {REGGUETON : true}
    }
    else if (artista.genero === "RAP"){
      artista.genero = {RAP : true}
    }
    else if (artista.genero === "ROCK"){
      artista.genero = {ROCK : true}
    }
    else if (artista.genero === "INDIE"){
      artista.genero = {INDIE: true}
    }
    else if (artista.genero === "ALTERNATIVO"){
      artista.genero = {ALTERNATIVO : true}
    }
    else if (artista.genero === "HIP HOP"){
      artista.genero = {HIP_HOP : true}
    }
    else if (artista.genero === "METAL"){
      artista.genero = {METAL: true}
    }
    else if (artista.genero === "JAZZ"){
      artista.genero = {JAZZ : true}
    }
    else if (artista.genero === "TRAP LATINO"){
      artista.genero = {TRAP_LATINO: true}
    }
    genero = artista.genero;
    return res.render("nuevoelemento", {artista:{id, nombre, imagen, genero, fecha, hora, descripcion}, errors: errors.array() });
  } else {
    // Process the form data and save it to the database
    let { nombre, imagen, genero, fecha, hora, descripcion } = req.body;
    let artista = ({nombre, imagen, genero, fecha, hora, descripcion});
    servidor.editArtista(req.params.id,artista);
    artista = servidor.getArtista(req.params.id);
    res.render("masInfo",{artista});
  }
});

router.get("/masInfo/:id/borrar", (req, res) => {
  servidor.deleteArtista(req.params.id); 
  res.redirect("/"); 
});

export default router;
