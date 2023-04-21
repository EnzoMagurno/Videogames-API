
const cleanArray = (arr) => arr.map(elem=>{
    return{
    id:elem.id,
    name:elem.name,
    description:elem.description,
    platforms:elem.platforms.map(ele=>ele.platform.name),
    image:elem.background_image,
    released:elem.released,
    rating:elem.rating,
    genres:elem.genres.map(genre=>genre.name),
    created:false
    }
})

module.exports = cleanArray