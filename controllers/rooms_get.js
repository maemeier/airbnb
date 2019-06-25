// database rooms
const db = require('../db')

module.exports = (req,res) =>{
  db.query(`SELECT * FROM rooms`, (err,result)=>{
    if(err){
      console.log('error conecting to rooms', err);
    } else {
      res.send(result.rows)
    }
  })
}
