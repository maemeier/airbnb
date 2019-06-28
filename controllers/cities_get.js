// database rooms
const db = require('../db')
//
module.exports = (req,res) =>{
  db.query `SELECT
    rooms.id,
    rooms.name,
    rooms.country,
    rooms.city,
    countries.name as "country",
    cities.name as "city",
    cities.name as "city",
    rooms.type,
    rooms.rating,
    rooms.price,
    rooms.image

    FROM rooms
    LEFT JOIN countries ON rooms.country = countries.id
    LEFT JOIN cities ON rooms.city = cities.id `

    if(req.query && Object.keys(req.query).length){
      query += `WHERE `
    }

    for (i = 0; i < Object.keys(req.query).length; i++){

      if (Object.keys(req.query)[i] == 'city' && i ==0){
        query += `rooms.city = ${req.query.city}`
      } else if (Object.keys(req.query)[i] == 'city'){
        query += ` and rooms.city = ${req.query.city}`
      }
    }
    console.log(query)

       db.query(query, (err, result) => {
           // if err comes up - display
           if (err) {
               console.log('err', err)
           } else {
               // else - send the result in rows ()
               res.send(result.rows)
           }
       })
}
