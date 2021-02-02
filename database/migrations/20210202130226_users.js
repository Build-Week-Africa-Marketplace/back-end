exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id")
        table.text("username")
          .notNull()
          .unique()
        table.text("password")
          .notNull()
        table.text("location")
        table.boolean("owner")
          .notNull()
          .defaultTo(0)
    })
  
    await knex.schema.createTable("items", (table) => {
        table.increments("id")
        table.text("name")
          .notNull()
        table.text("price")
          .notNull()
        table.text("location")
          .notNull()
    })
  
    await knex.schema.createTable("owner's items", (table) => {
        table.increments("id")
        table.text("name")
          .notNull()
        table.text("price")
          .notNull()
        table.integer("owner_id")
          .notNull()
          .references("id")
          .inTable("user")
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
    await knex.schema.dropTableIfExists("items")
    await knex.schema.dropTableIfExists("owner's items")
  };
  
