const {Game,Genre} = require('../db');
const createNewGameController = async(name,description,image,release_date,plataforms,rating,genre)=>{
    const genreDb = await Genre.findAll({where:{nombre:genre}})
    const game = await Game.create({
        name:name,
        description:description,
        image:image,
        release_date:release_date,
        plataforms:plataforms,
        rating:rating,
    })
    return await game.addGenre(genreDb)
}
module.exports = createNewGameController