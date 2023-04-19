const axios = require('axios');
const { API, API_KEY } = process.env;
require('dotenv').config();

const getGameHandler = async (req, res) => {
  let { name } = req.query;
  if (!name) return res.send((await axios.get(`${API}/games?key=${API_KEY}`)).data.results);
  name = name.toLowerCase()
  const games = ((await axios.get(`${API}/games?search=${name}&key=${API_KEY}`)).data.results);
  const filteredGamesByName = games.filter(game => game.name.toLowerCase().includes(name))
  res.status(200).send(filteredGamesByName.slice(0,15))
}
module.exports = getGameHandler;