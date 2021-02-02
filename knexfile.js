module.exports = {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: {
        filename: "./database/users.db3",
        },
        migrations: {
            directory: "./database/migrations",
        },
        seeds: {
            directory: "./database/seeds",
        },
}