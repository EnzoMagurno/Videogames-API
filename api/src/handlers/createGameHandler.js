const createNewGameController = require('../controllers/createNewGameController')
const createGame = async(req,res)=>{
    const {name,description,image,release_date,plataforms,rating} = req.body
    try {
      const newGame = await createNewGameController(name,description,image,release_date,plataforms,rating)
      res.status(200).json(newGame)
    } catch (error) {
      res.status(400).json(error.message)
    }
}
// const createGame = async(req,res)=>{
//   const {name,genre,description,image,release_date,plataforms} = req.body
//   try {
//     // const newGame = await createNewGameController(name,genre,description,image,release,plataforms)
//     const newGame = await Game.create({
//       name:name,
//       genre:genre,
//       description:description,
//       image:image,
//       release_date:release_date,
//       plataforms:plataforms,n
//     })
//     res.status(200).send(newGame)
//   } catch (error) {
//     res.status(400).json({message:error.message})
//   }
// }
module.exports = createGame