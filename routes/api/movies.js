const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');

router.get('/', moviesCtrl.indexMovie)
router.get('/:movie', moviesCtrl.searchApi)
router.get('/trending/:page', moviesCtrl.trendingPages)
router.get('/upcoming/:page', moviesCtrl.upcomingPages)
router.get('/kids/:page', moviesCtrl.kidsPages)

module.exports = router