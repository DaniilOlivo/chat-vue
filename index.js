const http = require("http")
require("dotenv").config()

const app = require("./server/app")

const server = http.createServer(app)

server.listen(process.env.PORT, () => {
    console.log("Server start http://127.0.0.1:" + process.env.PORT)
})
