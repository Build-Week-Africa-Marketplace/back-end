const db = require("../database/config")

module.exports = {
    add,
    find,
    findById,
    findByUsername,
    getUserItems
}

async function add(user) {
    const [id] = await db("users").insert(user)
        return findById(id)
}

function find() {
    return db("users")
}

function findById(id) {
    return db("users")
        .where("id", id)
        .first()
}

function findByUsername(username) {
    return db("users")
        .where("username", username)
        .first()
}

function getUserItems(id) {
    return db("user_items as i")
        .join("users as u", "u.id", "i.user_id")
        .select("i.id", "i.name", "i.price", "i.location", "u.username")
        .where("i.user_id", id);
}