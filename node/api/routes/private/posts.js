const express = require('express');

const postsBL = require('../../business/posts');
const postsIV = require('../input-validation/posts');
const validateInput = require('../../middleware/validate-input');

const router = express.Router();

// Quitar prefijo ya que estamos en la ruta posts ya
// Se debe subir el que recibe paràmetro para que entre primero a este y no al getAll
router.get('/:id', async (req, res) => {
  // Agregar un manejo de errores con try catch
  try {
    // Llamar a una BL
    const post = await postsBL.getById(req.params.id);
    // Añadir status code y nombre en el body con la property
    res.status(200).json({ post });
  } catch (err) {
    next(err);
  }
});

// Quitar prefijo ya que estamos en la ruta posts ya
router.get('/', async (req, res, next) => {
  // Agregar un manejo de errores con try catch
  try {
    // Llamar a una BL
    const posts = await postsBL.getAll();
    // Añadir status code y nombre en el body con la property
    res.status(200).json({ posts });
  } catch (err) {
    next(err);
  }
});

// Quitar prefijo ya que estamos en la ruta posts ya
// Agregar Input Validation
// Se podrìa obviar el ´create´
router.post('/', validateInput(postsIV), async (req, res, next) => {
  // Agregar un manejo de errores con try catch
  try {    
    // Llamar a una BL
    const newPost = await postsBL.add(req.body);
    // Averiguar diferencia entre send y json
    // Añadir status code y nombre en el body con la property
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});

// Quitar prefijo ya que estamos en la ruta posts ya
// Usar mètodo delete y pasar id por parametro
router.delete(
  '/:id',
  async (req, res, next) => {
    // Agregar un manejo de errores con try catch
    try {
      // Llamar a una BL
      await postsBL.delete(
        req.params.id
      );
      // Añadir status code
      // Cambiar por sendStatus
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  },
);

// Quitar prefijo ya que estamos en la ruta posts ya
// Usar mètodo put y pasar id por parametro
// Agregar Input Validation
router.put('/:id', validateInput(postsIV), async (req, res) => {
  // Agregar un manejo de errores con try catch
  try {
    // Llamar a una BL
    await postsBL.update(req.params.id, req.body);
    // Añadir status code
    // Cambiar por sendStatus
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
