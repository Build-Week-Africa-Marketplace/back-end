const supertest = require("supertest")
const server = require("../server")
const db = require("../database/config")

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("users integration tests", () => {
    it("gets all users", async () => {
        const res = await supertest(server).get("/users")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBe(4)
        expect(res.body[0].username).toBe("Ash")
    })

    it("adds a user", async () => {
        const res = await supertest(server).post("/register").send({username:"Heather", password: "Heather", location: "Denver", owner: 1})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.username).toBe("Heather")
    })

    it("gets user by id", async () => {
        const res = await supertest(server).get("/users/1")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.username).toBe("Ash")
    })

    it("gets a user's items", async () => {
        const res = await supertest(server).get("/users/1/items")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body[0].name).toBe("apples")
    })

    it("adds user item", async () => {
        const res = await supertest(server).post("/users/1/items").send({name: "cheese", price: "$1"})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("cheese")
        console.log(res.body)
    })

    it("gets a user's item by item id", async () => {
        const res = await supertest(server).get("/users/1/items/1")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.id).toBe(1)
        expect(res.body.name).toBe("apples")
    })

})