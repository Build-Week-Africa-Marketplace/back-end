const server = require("./server")

const port = 5000

server.listen(port, () => {
    console.log(`Running server at port ${port}`)
})