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

function findByUsersLocation(location) {
    return db("items")
        .innerJoin("users", "users.location", "items.location")
        .where("items.location", location)
}