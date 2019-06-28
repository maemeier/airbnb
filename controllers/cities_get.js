// // database rooms
// const db = require('../db')
// //
// module.exports = (req,res) =>{
//   let query = `SELECT
//     rooms.id,
//     rooms.name,
//     rooms.country,
//     rooms.city,
//     countries.name as "country",
//     cities.name as "city",
//     cities.name as "city",
//     rooms.type,
//     rooms.rating,
//     rooms.price,
//     rooms.image
//
//     FROM rooms
//     LEFT JOIN countries ON rooms.country = countries.id
//     LEFT JOIN cities ON rooms.city = cities.id `,
//
//
// (err, result) => {
//
// if (err) {
//       console.log('err', err)
//     } else {
//       res.send(result.rows)
//     }
//   }
// }
