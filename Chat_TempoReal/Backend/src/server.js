const { WebSoketServer } = require("ws")
const dotenv = require ("dotenv")

dotenv.config()

const wss = new WebSoketServer ({port : process.env.PORT || 8080})

wss.on("connection", (ws) => {
    ws.on("error", cosole.error)

    ws.on("message", (data) => {
        wss.clients.forEach((client) => client.send(data.toString))
    })

    console.log("client connected")
})