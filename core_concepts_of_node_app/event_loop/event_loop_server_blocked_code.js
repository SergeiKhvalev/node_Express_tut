const http = require('http');

const server = http.createServer((req, resp) =>{
    if(req.url ==='/'){
        resp.end("You are on home page");
    }
    if(req.url === "/about"){
        resp.end("You are on company history page");
        // blocking code => gives delay
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){// those nested loop will block all server
                console.log(`${i}, ${j}`);
            }
        }
    }
    resp.end("Error page")

})

server.listen(5000, ()=> {
        console.log("Server listening on port : 5000");
    }
)