module.exports = {
    development: {
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
    },

    production: {
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
    },

    testing: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: {
        filename: "./database/users-test.db3",
        },
        migrations: {
            directory: "./database/migrations",
        },
        seeds: {
            directory: "./database/seeds",
        },
    }
}