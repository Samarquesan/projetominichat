const{ WebSocketServer } = require("ws")
const dotenv = require ("dotenv")

dotenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on("connection", (ws) =>{
   ws.on("error", console.error)
   //ws.send("Servidor quer café!!!")
   ws.on("message", (data) =>{
      //console.log(data.toString())
      wss.clients.forEach((client) => client.send(data.toString()))
   })
   console.log("client connected")
})