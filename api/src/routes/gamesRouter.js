const { Router } = require('express');
const gamesRouter = Router();
const getGameById = require('../controllers/getGameById');
const getGameHandler = require('../controllers/getGameHandler');

gamesRouter.get('/', getGameHandler);
gamesRouter.get('/:id', async (req, res) => {
  try {
    const data = await getGameById(req, res);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json('Prueba con otro ID =D');
  }
});
module.exports = gamesRouter;
