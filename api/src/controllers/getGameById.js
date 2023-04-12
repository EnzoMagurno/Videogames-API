const axios = require('axios');
const { API, API_KEY } = process.env;
require('dotenv').config();

const getGameById = async (req, res) => {
  const { id } = req.params;
  return (await axios.get(`${API}/games/${id}?key=${API_KEY}`)).data;
};

//   const response = await axios.get(`${API}/games/${id}?key=${API_KEY}`);
//   const data = response.data;
//   return data;
//    return await (axios.get(`${API}/games/${id}?key=${API_KEY}`)).data;
module.exports = getGameById;