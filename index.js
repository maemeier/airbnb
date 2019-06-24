// check connection
console.log("Mae Airbnb");

// configuration

const express = require('express')
const path = require('path')
const app = express()

// server

app.use(express.static(path.join(__dirname, 'client')))

// app.get('/'(req,res)=>{
//   res.sendFile(path.join(__dirname,'/client/room.html'))
//   console.log('__dirname', __dirname);
// })

app.listen(3000,()=>{
  console.log(`Server listinging on port 3000`);
})
