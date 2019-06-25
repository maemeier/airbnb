//require pg
const {Client} = require('pg')

// create connection
const db = new Client({
  connectionString: 'postgres://maemeier:karate31@localhost:5432/maemeier'
})

// connect to database and test
db.connect((err)=>{
  if(err){
    console.log("error connection to Airbnb");
  }else{
    console.log("connect to airbnb database");
  }
})


module.exports = db

//
// app.get('api/room',require(./))
