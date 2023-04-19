const { Router } = require('express');
const gamesRouter = Router();
const getGameById = require('../handlers/getGameById');
const getGameHandler = require('../handlers/getGameHandler');
const createGameHandler = require('../handlers/createGameHandler')
const getGenres = require('../controllers/getGenres')

gamesRouter.post('/',createGameHandler)
gamesRouter.get('/', getGameHandler);
gamesRouter.get('/genres',getGenres);
gamesRouter.get('/:id', getGameById);

module.exports = gamesRouter;