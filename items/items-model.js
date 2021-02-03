const db = require("../database/config")

module.exports = {
    find,
    findById,
    findByLocation
}

function find() {
    return db("items")
}

function findById(id) {
    return db("items")
        .where("id", id)
        .first()
}

function findByLocation(location) {
    return db("items")
        .where("location", location)
}