const axios = require('axios');
const { API, API_KEY } = process.env;
require('dotenv').config();


const getGameByName = async(name)=>{
        name = name.toLowerCase()
        return await (axios.get(`${API}/games?search=${name}&key=${API_KEY}`))
        .then(response=>{
            const games = response.data.results.filter(game=>game.name.toLowerCase().includes(name))
            if(games.length===0){
                return games
            }else{
                return games.slice(0,15)
            }
        })
}
module.exports = getGameByName