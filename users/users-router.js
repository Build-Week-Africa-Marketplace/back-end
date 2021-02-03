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

router.get("/users/:id", async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id)
            return res.status(200).json(user)
    } catch(err) {
        next(err)
    }
})

router.get("/users/:id/items", async (req, res, next) => {
    try {
        res.json(await Users.getUserItems(req.params.id))
    } catch(err) {
        next(err)
    }
})

router.get("/users/:user_id/items/:item_id", async (req, res, next) => {
    try {
        const item = await Users.getUserItemById(req.params.user_id, req.params.item_id)
         if (item.length < 1) {
             return res.status(404).json({
                 message: "item does not exist"
             })
         }
        return res.status(200).json(...item)

    } catch(err) {
        next(err)
    }
})

router.post("/users/:id/items", async (req, res, next) => {
    try {
        if (!req.body.name || !req.body.price) {
            return res.status(400).json({
                message: "Item name and price required"
            })
        }

        const item = await Users.addUserItem(req.params.id, req.body)
        return res.status(201).json(...item)

    } catch(err) {
        next(err)
    }
})

router.put("/users/:user_id/items/:item_id", async (req, res, next) => {
    const item = await Users.getUserItemById(req.params.user_id, req.params.item_id)
        if (item.length < 1) {
            return res.status(404).json({
                message: "item does not exist"
            })
        }
    const changes = req.body
        Users.updateUserItem(req.params.item_id, changes)
            return res.status(201).json({
                message: "Item successfully updated."
            })
})

router.delete("/users/:user_id/items/:item_id", async (req, res, next) => {
    const item = await Users.getUserItemById(req.params.user_id, req.params.item_id)
         if (item.length < 1) {
             return res.status(404).json({
                 message: "item does not exist"
             })
         }
        
         Users.deleteUserItem(req.params.item_id)
         return res.status(200).json({
             message: `Item ${req.params.item_id} was successfully deleted.`
         })

})

module.exports = router