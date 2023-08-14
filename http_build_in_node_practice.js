/*
In JavaScript, the term "HTTP module" generally refers to a library or module that provides functionality for making HTTP requests and handling HTTP responses. This is particularly useful when you want to interact with web servers, APIs, or other online resources from within your JavaScript code.
A common use case for using an HTTP module in JavaScript is when you're building web applications or websites that need to fetch data from external sources or communicate with a backend server. This could involve retrieving data, sending data, or performing various CRUD (Create, Read, Update, Delete) operations on a remote server.
 */

/*
The http.createServer() function is a part of the Node.js built-in http module. It's used to create an HTTP server instance that can listen for incoming HTTP requests and send back corresponding responses. This is particularly useful when you're building server-side applications using Node.js.
 */
// const http = require("http");
// const server = http.createServer((req, res)=>{
//     //console.log(res); if you want to see res object
//     res.write('Hello Sergei Khvalev my man');//In this corrected snippet, the res.write('blabla') line writes the "blabla" string to the response body. After writing the content, the res.end() method is called to signal the end of the response. This is necessary to complete the response and send it back to the client.
//     res.end();// This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.
// });
//
// server.listen(5000); //The server.listen(5000) line of code is used to start the HTTP server and make it listen on port 5000 for incoming requests. This is a common practice in server-side programming using Node.js. In this example, after creating the HTTP server with http.createServer(), the server.listen(5000) line starts the server and tells it to listen on port 5000. When you run this script and navigate to http://localhost:5000 in your web browser, the server will handle the request and respond with "Hello, World!". You can change the port number (5000 in this case) to any other available port you prefer. Just make sure that the port you choose is not already in use by another application on your system.
//
// // now when we run that file we create server on port 5000, and ask it to listen responses/ to send new responce need stop server and start it again

const http2 = require("http");
const server2 = http2.createServer((req, res) =>{
    if(req.url === "/"){
        res.end("Sergei to our home page");
    }
    if(req.url === "/about"){
        res.end("Here is our short story");
    }
    res.end(
        '<h1>Opps!</h1>'
    )
})

server2.listen(5000);