const{ WebSocketServer } = require("ws")
const dotenv = require ("dotenv")

dotenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on("connection", (ws) =>{
   ws.on("error", console.error)
   ws.on("message", (data) =>{
    wss.clientes.forEach((client) => client.send(data.toString()))
   })
   console.log("cliente coneected")
})