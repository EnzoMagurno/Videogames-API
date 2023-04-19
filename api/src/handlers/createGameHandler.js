const createNewGameController = require('../controllers/createNewGameController')
const createGame = async(req,res)=>{
    const {name,description,image,release_date,plataforms,rating,genre} = req.body
    try {
      const newGame = await createNewGameController(name,description,image,release_date,plataforms,rating,genre)
      res.status(200).send(newGame)
    } catch (error) {
      res.status(400).send(error.message)
    }
}
module.exports = createGame