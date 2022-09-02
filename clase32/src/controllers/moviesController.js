const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', { movies })
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', { movie });
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', { movies });
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 }
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', { movies });
            });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.render('moviesAdd', { genres });
            })
            .catch(err => req.send(err));
    },
    create: (req, res) => {
        const newMovie = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        };
        db.Movie.create(newMovie)
            .then(() => {
                return res.redirect('/movies');
            })
            .catch(error => res.send(error));
    },
    edit: async (req, res) => {
        try {
            const movieId = req.params.id;
            const genres = await db.Genre.findAll();
            const Movie = await db.Movie.findByPk(movieId);
            return res.render('moviesEdit', { Movie, genres });
        } catch (error) {
            res.send(error);
        }
    },
    update: (req, res) => {
        const movieId = req.params.id;
        const movieToUpdate = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        }
        db.Movie.update(movieToUpdate, { where: { id: movieId } })
            .then(() => {
                return res.redirect('/movies');
            })
            .catch(error => res.send(error));
    },
    delete: (req, res) => {
        const movieId = req.params.id;
        db.Movie.findByPk(movieId)
            .then(Movie => {
                return res.render('moviesDelete', { Movie })
            })
            .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        const movieId = req.params.id;
        db.Movie.destroy({ where: { id: movieId } })
            .then(() => {
                res.redirect('/movies');
            })
            .catch(error => res.send(error));
    }

}

module.exports = moviesController;