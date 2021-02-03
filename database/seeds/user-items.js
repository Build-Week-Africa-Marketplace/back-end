
exports.seed = async function(knex) {
  await knex("user_items").truncate()
  await knex("user_items").insert([
    {id: 1, name: "apples", price: "$0.50", user_id: 1},
    {id: 2, name: "bananas", price: "$0.25", user_id: 2},
    {id: 3, name: "bread", price: "$1.50", user_id: 3}
  ])
};