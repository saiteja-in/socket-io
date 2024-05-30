const express=require("express")
require("dotenv").config();
const { join } = require("path")
const app=express()
const {createServer}=require('http')
const {Server}=require("socket.io")
const server=createServer(app)
const PORT=process.env.PORT || 3000
const io=new Server(server)
app.get("/",(req,res)=>{
    res.sendFile(join(__dirname,'index.html'))
})
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message',msg)
    });
  });


server.listen(PORT,()=>console.log("connected to port"))