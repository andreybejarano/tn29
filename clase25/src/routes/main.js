const express = require('express');

const mainController = require('../controllers/mainController');

const userMiddleware = require('../middlewares/user');

const router = express.Router();

router.get('/', mainController.index);
router.get('/admin', userMiddleware, mainController.admin);

module.exports = router;