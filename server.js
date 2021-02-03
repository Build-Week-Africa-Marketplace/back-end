const express = require("express")
const userRouter = require("./users/users-router")
const itemsRouter = require("./items/items-router")

const server = express()

server.use(express.json())
server.get("/", (req, res) => {
    res.send("Hello!")
})

server.use(userRouter)
server.use(itemsRouter)

module.exports = server