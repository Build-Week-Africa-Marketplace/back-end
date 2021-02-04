const supertest = require("supertest")
const server = require("../server")
const db = require("../database/config")

afterAll(async () => {
    await db.destroy()
})

describe("item integration tests", () => {
    
    it("gets all suggested items", async () => {
        const res = await supertest(server).get("/items")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBe(5)
    })

    it("gets suggested items by location", async () => {
        const res = await supertest(server).post("/items/location").send({location: "Pallet Town"})
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body[0].name).toBe("apples")
    })

    it("gets suggested item by id", async () => {
        const res = await supertest(server).get("/items/1")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("apples")
    })
})