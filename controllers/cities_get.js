// database rooms
const db = require('../db')
//
  module.exports = (req,res) =>{
    let query = `SELECT
      rooms.id,
      rooms.name,
      rooms.country,
      rooms.city,
      countries.name as "country",
      cities.name as "city",
      rooms.name as "name",
      rooms.type,
      rooms.rating,
      rooms.price,
      rooms.image

      FROM rooms
      LEFT JOIN countries ON rooms.country = countries.id
      LEFT JOIN cities ON rooms.city = cities.id `

    if (req.query.city) {
      query += ` WHERE city = ${req.query.city} `

      }
      console.log(query);

      	db.query(query, (err, result) => {
      		if (err) {
      			res.send(err)
      		} else {
      			res.send(result.rows)
      		}
      	})
      }
