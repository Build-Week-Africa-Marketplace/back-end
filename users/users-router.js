const express = require("express")
const Users = require("./users-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {restrict} = require("../middleware")

const router = express.Router()

router.get("/users", async (req, res, next) => {
    try {
        res.json(await Users.find())
    } catch(err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        const {username, password, location, owner} = req.body
        const user = await Users.findByUsername(username)
        if (!username) {
            res.status(401).json({
                message: "username is required"
            })
        }

        if (!password) {
            res.status(401).json({
                message: "password is required"
            })
        }

        if (user) {
            return res.status(401).json({
                message: "username is not available"
            })
        }
        const newUser = await Users.add({
            username,
            password: await bcrypt.hash(password, 10),
            location,
            owner
        })
        return res.status(201).json(newUser)
    } catch(err) {
        next(err)
    }
})

router.post("/login", async (req, res, next) => {
    try {
        const {username, password} = req.body

        if (!username || !password) {
            return res.status(401).json({
                message: "username and password required"
            })
        }

        const user = await Users.findByUsername(username).first()

        if (!user) {
            return res.status(401).json({
                message: "invalid credentials"
            })
        }

        const passwordValid = await bcrypt.compare(password, user.password)

        if (!passwordValid) {
            return res.status(401).json({
                message: "invalid credintials"
            })
        }

            const token = jwt.sign({
                userId: user.id,
                userName: user.username
            }, process.env.JWT_SECRET)

            res.status(200).json({
                message: `Welcome, ${user.username}`,
                token: token
            })
            next()
    } catch(err) {
        next(err)
    }
})

module.exports = router