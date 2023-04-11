const { Router } = require('express');
const getGames = require('../controllers/getOk');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.get('/games', async (req, res) => {
  try {
    const data = await getGames();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
