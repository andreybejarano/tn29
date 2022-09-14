const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.post('/api/movie', moviesController.create);
router.delete('/api/movie/:id', moviesController.destroy);

module.exports = router;