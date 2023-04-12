const axios = require('axios');
require('dotenv').config();
const { API, API_KEY } = process.env;

const getGames = async () => {
  return (await axios.get(`${API}/games?key=${API_KEY}`)).data;
};

module.exports = getGames;
