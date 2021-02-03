const express = require("express")
const Items = require("./items-model")
const Users = require("./users-model")
const {restrict} = require("../middleware")

const router = express.Router()

router.get("/items", async (req, res, next) => {
    try {
        const items = await Items.find()
        return res.status(200).json(items)
    }catch(err) {
        next(err)
    }
})

router.get("/items/:id", async (req, res, next) => {
    try {
        const item = await Items.findById(req.params.id)
        return res.status(200).json(item)
    } catch(err) {
        next(err)
    }
})

router.post("/items/location", async (req, res, next) => {
    try {
        const location = req.body.location
        const items = await Items.findByLocation(location)
        return res.status(200).json(items)
    } catch(err) {
        next(err)
    }
})

module.exports = router