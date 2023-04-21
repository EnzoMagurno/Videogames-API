const axios = require('axios')
const {Genre} = require('../db.js')
require('dotenv').config();
// const { API, API_KEY } = process.env;


const getGenres = async(req,res) =>{
    try {
        const response = (await axios.get('https://api.rawg.io/api/genres?key=b346a1d8243747faa5d17435c43db2e0')).data.results
        const data = response.map(ele=>{return {nombre:ele.name}})
        const genres = await Genre.bulkCreate(data)
        res.status(200).send(genres)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}
module.exports = getGenres