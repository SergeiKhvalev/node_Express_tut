// lot of node js modules use events underhood. One ot them is http module
const http = require('http');

//Using Event Emitter API
const server = http.createServer();
// emits request event
//subscribe to it listen it / respond to it
server.on('request', (req, resp) => {
    resp.end("Welcome");
})

server.listen(5000);