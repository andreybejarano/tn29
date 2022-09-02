const db = require('../database/models');

const genresController = {
    list: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.render('genresList.ejs', { genres })
            })
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', { genre });
            });
    }

}

module.exports = genresController;