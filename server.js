const express = require("express")
const userRouter = require("./users/users-router")

const server = express()

server.use(express.json())
server.get("/", (req, res) => {
    res.send("Hello!")
})

server.use(userRouter)

module.exports = server