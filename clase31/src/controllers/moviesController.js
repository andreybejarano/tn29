const db = require('../database/models');

const moviesController = {
    list: (req, res) => {
        db.Movie.findAll()
            .then(data => {
                res.render('moviesList', { movies: data });
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = moviesController;