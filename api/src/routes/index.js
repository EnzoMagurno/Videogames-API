//Requerir las dependencias.
const { Router } = require('express');
const mainRouter = Router();
const gamesRouter = require('./gamesRouter');

// Configurar los routers
mainRouter.use('/games', gamesRouter);

module.exports = mainRouter;
