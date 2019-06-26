// database rooms
const db = require('../db')

module.exports = (req,res) =>{
  db.query(`SELECT rooms.id, rooms.name, rooms.country, rooms.city, countries.name as "country", price as "price", rooms.type, rooms.rating FROM rooms
LEFT JOIN countries ON rooms.country = countries.id`, (err,result)=>{
    if(err){
      console.log('error conecting to rooms', err);
    } else {
      res.send(result.rows)
    }
  })
}
