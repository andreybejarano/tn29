const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList', { movies })
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail', { movie });
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
                res.render('recommendedMovies', { movies });
            });
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: (req, res) => {
        const promGenres = Genres.findAll();
        const promActors = Actors.findAll();

        Promise
            .all([promGenres, promActors])
            .then(([allGenres, allActors]) => {
                return res.render('moviesAdd', { allGenres, allActors })
            })
            .catch(error => res.send(error))
    },
    create: (req, res) => {
        Movies
            .create(
                {
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    release_date: req.body.release_date,
                    length: req.body.length,
                    genre_id: req.body.genre_id
                }
            )
            .then(() => {
                return res.redirect('/movies')
            })
            .catch(error => res.send(error))
    },
    edit: (req, res) => {
        const movieId = req.params.id;
        const promMovies = Movies.findByPk(movieId, { include: ['genre', 'actors'] });
        const promGenres = Genres.findAll();
        const promActors = Actors.findAll();
        Promise
            .all([promMovies, promGenres, promActors])
            .then(([Movie, allGenres, allActors]) => {
                return res.render('moviesEdit', { Movie, allGenres, allActors })
            })
            .catch(error => res.send(error))
    },
    update: (req, res) => {
        const movieId = req.params.id;
        Movies
            .update(
                {
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    release_date: req.body.release_date,
                    length: req.body.length,
                    genre_id: req.body.genre_id
                },
                {
                    where: { id: movieId }
                })
            .then(() => {
                return res.redirect('/movies')
            })
            .catch(error => res.send(error))
    },
    delete: (req, res) => {
        const movieId = req.params.id;
        Movies
            .findByPk(movieId)
            .then(Movie => {
                return res.render('moviesDelete', { Movie })
            })
            .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        const movieId = req.params.id;
        Movies
            .destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(() => {
                return res.redirect('/movies')
            })
            .catch(error => res.send(error))
    },
    all: async (req, res) => {
        const movies = await db.Movie.findAll({
            include: [
                {
                    association: 'genre',
                    attributes: {
                        exclude: ['created_at', 'updated_at']
                    }
                },
                'actors'
            ]
        });
        res.json(movies);
    }
}

module.exports = moviesController;