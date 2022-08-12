const express = require('express');
const { body } = require('express-validator');

const mainController = require('../controllers/mainController');

// TODO: deberia estar en otro archivo
const validator = [
    body('name').isLength({ min: 1 }).withMessage('Debe ingresar un nombre'),
    body('email').isEmail().withMessage('Debe ingresar un email valido'),
    body('color').isLength({ min: 1 }).withMessage('Debe seleccionar un color'),
    body('age').custom(value => {
        if (isNaN(value)) {
            throw new Error('El valor ingresado debe ser un numero');
        } else {
            return true;
        }
    })
];

const router = express.Router();

router.get('/', mainController.index);
router.post('/', validator, mainController.store);

module.exports = router;