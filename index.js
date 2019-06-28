// check connection
console.log("Mae Airbnb");

// configuration

const express = require('express')
const path = require('path')
const app = express()
// const bodyParser = require('body-parser')

const db = require('./db')
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())
// server

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname,'/client/room.html'))
  console.log('__dirname', __dirname);
})

app.get('/api/rooms', require('./controllers/rooms_get'))
// app.post('/api/rooms', require('./controllers/rooms_create'))

app.get('/api/cities', require('./controllers/cities_get'))
app.get('/api/countries', require('./controllers/countries_get'))



app.listen(3000,()=>{
  console.log(`Server listinging on port 3000`);
})
