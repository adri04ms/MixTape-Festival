import express from "express";
/* 
import * as servidor from "./servidor"; */ /* hasta que noo definais funciones y cosas dentro de servidor no lo descoomenteis porque node intenta importar aquí las funciones y comoo no hay nada da error */

const router = express.Router();

router.get("/", (req, res) => {
  /*  const elemento = servidor.getElemento(0, 15);*/ /* HAstas que no defiinais en servidor la funcio getElemento no la useis pq os dará error al inciar el servidor */
  res.render("paginaweb"/* falta lo del elemenot, pero lo teneis que definir primero para lo de la pila */);
});

router.get("/nuevo", (req, res) => {
  res.render("nuevoelemento");
});

router.post("/nuevoelemento", (req, res) => {
  console.log(req.bady);
  let { nombre, descripcion, genero, fecha, hora, imagen } = req.body;
  /*   servidor.elemento({ nombre, genero, imagen }); */
  res.render("Guardado");
});

//Sirve para obtener un cantante específico por su ID
router.get("/masInfo/:id", (req, res) => {
  /* let elemento = servidor.elemento(req.params.id); */
  console.log(elemento);
  res.render("masinfo", { elemento });
});

export default router;
