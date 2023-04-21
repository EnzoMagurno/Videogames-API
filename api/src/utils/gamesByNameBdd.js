const {Op} = require('sequelize')
const {Game} = require('../db.js')

const gamesByNameBdd = async(name) =>{
    try {
      const game = await Game.findAll({
        where:{name:{[Op.iLike]: `%${name}%`}},
        // order:[['name',order]]
      })
      return game
    } catch (error) {
      throw Error (error.message)
    }
  }

  module.exports = gamesByNameBdd