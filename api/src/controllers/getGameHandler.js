const axios = require('axios');
const { API, API_KEY } = process.env;
require('dotenv').config();

const getGameHandler = async (req, res) => {
  const { name } = req.query;
  if (!name) return res.send((await axios.get(`${API}/games?key=${API_KEY}`)).data);
  res.send((await axios.get(`${API}/games?search=${name}&key=${API_KEY}`)).data);
}
module.exports = getGameHandler;
