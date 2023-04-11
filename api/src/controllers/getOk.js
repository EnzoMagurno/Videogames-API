const axios = require('axios');
require('dotenv').config();
const { API, API_KEY } = process.env;
const getGames = async () => {
  return (await axios.get(`${API}?key=${API_KEY}`)).data;
};
// const getAllGames = async () => {
//   const videogamesApi = await cleanArray(
//     await axios.get(`${API}?key=${API_KEY}`).data.results
//   );
//   return videogamesApi;
// };
module.exports = getGames;
