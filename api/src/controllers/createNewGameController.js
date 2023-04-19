const {Game} = require('../db');
const createNewGameController = async(name,description,image,release_date,plataforms,rating)=> 
await Game.create({
    name:name,
    description:description,
    image:image,
    release_date:release_date,
    plataforms:plataforms,
    rating:rating
})

module.exports = createNewGameController