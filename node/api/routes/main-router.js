const express = require('express');

const posts = require('./private/posts');
// const entidad2 = require('./private/entidad2');
// const entidad3 = require('./private/entidad3');

const router = express.Router();

router.use('/posts', posts);
// router.use('/entidad2', entidad2);
// router.use('/entidad3', entidad3);

module.exports = router;
