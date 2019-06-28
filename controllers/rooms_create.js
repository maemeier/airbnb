// database rooms
const db = require('../db')

// all rooms
module.exports = (req,res) =>{

  console.log('req.body' , req.body)
  let query = `INSERT INTO rooms (name, price, country)
  VALUES ('${req.body.name}', ${req.body.price},${req.body.country})`

  console.log(query);

  db.query(query, (err,result) => {
    if(err){
      console.log('error creating room', err);
    } else {
      console.log(result)
      res.send(result)
    }
  })
}
