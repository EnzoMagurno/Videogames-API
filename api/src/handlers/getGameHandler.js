const axios = require('axios');
const { API, API_KEY } = process.env;
const {Game} = require('../db.js')
const cleanArray = require('../utils/cleanArray.js')
const gamesByNameBdd = require('../utils/gamesByNameBdd.js')
require('dotenv').config();

const getGameHandler = async (req, res) => {
  let {name} = req.query
  // let orderBy = [['name','ASC']]
  // if(order){
  //   orderBy = [['name',order]]
  // }
  const databaseGames = await Game.findAll({
    // order:orderBy
  })
  if(!name){
    const apiGamesRaw = (await axios.get(`${API}/games?key=${API_KEY}`)).data.results
    const apiGames = cleanArray(apiGamesRaw)
    return res.status(200).send([...databaseGames,...apiGames]) 
  }
  name = name.toLowerCase()
  const gamesApi = ((await axios.get(`${API}/games?search=${name}&key=${API_KEY}`)).data.results);
  const filteredGamesByNameRaw = gamesApi.filter(game => game.name.toLowerCase().includes(name)).slice(0,15)
  const filteredGamesByName = cleanArray(filteredGamesByNameRaw)
  const gamesFromDbbByName = await gamesByNameBdd(name)
  res.status(200).send([...gamesFromDbbByName,...filteredGamesByName])
}
module.exports = getGameHandler;