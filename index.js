const express=require("express")
const { join } = require("path")
const app=express()
const {createServer}=require('http')
const {Server}=require("socket.io")
const server=createServer(app)

const io=new Server(server)
app.get("/",(req,res)=>{
    res.sendFile(join(__dirname,'index.html'))
})
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message',msg)
    });
  });


server.listen(3000,()=>console.log("connected to port"))