
const bcrypt = require("bcryptjs")

exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("users").insert([
    {id: 1, username: "Ash", password: await bcrypt.hash("Pikachu", 10), location: "Pallet Town", owner: true},
    {id: 2, username: "Brock", password: await bcrypt.hash("Rock", 10), location: "Pewter City", owner: true},
    {id: 3, username: "Misty", password: await bcrypt.hash("Water", 10), location: "Cerulean City,", owner: true},
    {id: 4, username: "Gary", password: await bcrypt.hash("Squirtle", 10), location: "Pallet Town", owner: false},
  ])
};
