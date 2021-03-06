const express = require("express")
const userRouter = require("./users/users-router")
const itemsRouter = require("./items/items-router")
const cors = require("cors")

const server = express()
server.use(cors())

server.use(express.json())
server.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Africa Marketplace API!!!"
    })
})

server.use(userRouter)
server.use(itemsRouter)

module.exports = server