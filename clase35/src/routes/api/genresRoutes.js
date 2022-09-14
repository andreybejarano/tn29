const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresController');

router.get('/api/genre', genresController.list);
router.get('/api/genre/:id', genresController.detail);


module.exports = router;