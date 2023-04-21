const axios = require('axios')
require('dotenv').config();
const { API, API_KEY } = process.env;
const {Game} = require('../db.js')
const cleanArray = require('../utils/cleanArray.js')

const getGameByIdController = async(id,source) =>{
    if(source==='api'){
        const response = (await (axios.get(`${API}/games/${id}?key=${API_KEY}`))).data
        const data = cleanArray([response])
        if(!response) throw new Error ('No data')
        return data
    }
    const response = await Game.findByPk(id)
    return response
}
module.exports = getGameByIdController