const db = require('../../database/models');

const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.json({
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: req.url
                    },
                    data: genres
                });
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.json({
                    meta: {
                        status: 200,
                        url: req.url
                    },
                    data: genre
                });
            });
    }

}

module.exports = genresController;