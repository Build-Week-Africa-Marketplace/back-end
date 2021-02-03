const { innerJoin } = require("../database/config")
const db = require("../database/config")

module.exports = {
    add,
    find,
    findById,
    findByUsername,
    getUserItems,
    addUserItems,
    getUserItemById
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
    return db("user_items")
        .innerJoin("users", "users.id", "user_items.user_id")
        .where("user_items.user_id", id)
        .select("user_items.id", "user_items.name", "user_items.price", "users.location", "users.username")
}

function getUserItemById(user_id, item_id) {
    return db("user_items as i")
        .innerJoin("users as u", "u.id", "user_items.user_id")
        .where ({"i.user_id": user_id, 'i.id': item_id})
}

async function addUserItems(userId, data) {
    const item = {user_id: userId, ...data}
    const [id] = await db("user_items").insert(item)
        return getUserItems(userId)
}