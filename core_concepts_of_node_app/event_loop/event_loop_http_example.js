const http = require('http');
const server = http.createServer((req, res) => {
    console.log("request event");
    res.end("Hello Sergei");
})

server.listen(5000, () => {
    console.log("Server are listening on port : 5000")
})