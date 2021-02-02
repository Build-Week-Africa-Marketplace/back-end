
exports.seed = async function(knex) {
  await knex("owner's items").truncate()
  await knex("owner's items").insert([
    {id: 1, name: "apples", price: "$0.50", owner_id: 1},
    {id: 2, name: "bananas", price: "$0.25", owner_id: 2},
    {id: 3, name: "bread", price: "$1.50", owner_id: 3}
  ])
};