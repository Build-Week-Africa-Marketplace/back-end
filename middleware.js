const jwt = require("jsonwebtoken")

function restrict() {
    return async (req, res, next) => {
        try{
            const token = req.headers.authorization
            if (!token) {
                return res.staus(401).json({
                    message: "you are not authorized"
                })
            }

            jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
                if (err) {
                    return res.status(401).json({
                        message: "you are not authorized"
                    })
                }
            })

        next()
        } catch(err) {
            next(err)
        }
    }
}

module.exports = {restrict}