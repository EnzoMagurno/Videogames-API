const { Router } = require('express');
const gamesRouter = Router();
const getGames = require('../controllers/getGames');
const getGameById = require('../controllers/getGameById');

gamesRouter.get('/', getGames);

gamesRouter.get('/:id', );
module.exports = gamesRouter;