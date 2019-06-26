// database rooms
const db = require('../db')

module.exports = (req,res) =>{
  db.query(`SELECT rooms.id, rooms.name, rooms.country, rooms.city, countries.name as "country", cities.name as "city", rooms.type, rooms.rating, rooms.price
FROM rooms LEFT JOIN countries ON rooms.country = countries.id LEFT JOIN cities ON rooms.city = cities.id` , (err,result)=>{
    if(err){
      console.log('error conecting to rooms', err);
    } else {
      res.send(result.rows)
    }
  })
}
