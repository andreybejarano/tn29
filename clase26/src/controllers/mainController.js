const { validationResult } = require('express-validator');

const controller = {
    index: (req, res) => {
        res.render('index', {
            name: req.session.name,
            email: req.session.email,
            age: req.session.age,
            color: req.session.color
        });
    },
    store: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(errors.array());
        }
        req.session.email = req.body.email;
        req.session.age = req.body.age;
        req.session.name = req.body.name;
        req.session.color = req.body.color;
        
        res.redirect('/');
    }
}

module.exports = controller;