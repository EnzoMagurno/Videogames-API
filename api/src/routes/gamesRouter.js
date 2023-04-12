const { Router } = require('express');
const gamesRouter = Router();
const getGames = require('../controllers/getGames');
const getGameById = require('../controllers/getGameById');
gamesRouter.get('/', async (req, res) => {
  try {
    const data = await getGames();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

gamesRouter.get('/:id', async (req, res) => {
  try {
    const data = await getGameById(req,res);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
module.exports = gamesRouter;
