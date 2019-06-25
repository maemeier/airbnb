// database rooms
const db = require('../db')

module.exports = (req,res) =>{
  db.query(`SELECT * FROM Countries`, (err,result)=>{
    if(err){
      console.log('error conecting to countries', err);
    } else {
      res.send(result.rows)
    }
  })
}
