// database rooms
const db = require('../db')

module.exports = (req,res) =>{
  db.query(`SELECT * FROM cities`, (err,result)=>{
    if(err){
      console.log('error conecting to cities', err);
    } else {
      res.send(result.rows)
    }
  })
}
