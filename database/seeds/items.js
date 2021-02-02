
exports.seed = async function(knex) {
  await knex("items").truncate()
  await knex("items").insert([
    {id: 1, name: "apples", price: "$0.50", location: "Pallet Town"},
    {id: 2, name: "bananas", price: "$0.25", location: "Pallet Town"},
    {id: 3, name: "bread", price: "$1.50", location: "Cerulean City"},
    {id: 4, name: "milk", price: "$2.00", location: "Cerulean City"},
    {id: 5, name: "eggs", price: "1.25", location: "Pewter City"},
  ])
};
