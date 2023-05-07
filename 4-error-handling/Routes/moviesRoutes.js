const express = require('express');
const moviesController = require('./../Controllers/moviesController');

const router = express.Router();

//router.param('id', moviesController.checkId)

router.route('/highest-rated').get(moviesController.getHighestRated, moviesController.getAllMovies)

router.route('/movie-stats').get(moviesController.getMovieStats);

router.route('/movies-by-genre/:genre').get(moviesController.getMovieByGenre);

router.route('/')
    .get((moviesController.getAllMovies))
    .post(moviesController.createMovie)


router.route('/:id')
    .get(moviesController.getMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie)

module.exports = router;