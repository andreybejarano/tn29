const db = require('../../database/models');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;

const moviesController = {
    create: function (req,res) {
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
        .then((movieCreated)=> {
            return res.json(movieCreated);
        })            
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            // Remplazar
            return res.redirect('/movies');
        })
        .catch(error => res.send(error)) 
    }
}

module.exports = moviesController;