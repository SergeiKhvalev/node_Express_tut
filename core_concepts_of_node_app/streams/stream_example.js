/*
In Node.js, streams are a fundamental concept that allow you to efficiently handle and manipulate data as it is being read from or written to a source, without needing to load the entire dataset into memory. Streams are especially useful for handling large files, network communication, and other I/O operations. They provide a way to work with data in chunks, which can significantly improve performance and reduce memory consumption.
There are four types of streams in Node.js:
Readable Streams: These streams allow you to read data from a source, such as a file or network socket. They emit 'data' events as chunks of data become available. Examples include reading from a file or receiving data over an HTTP request.
Writable Streams: These streams allow you to write data to a destination, such as a file or network socket. You can write data in chunks and the stream will handle buffering and writing asynchronously. Examples include writing to a file or sending data over an HTTP response.
Duplex Streams: These streams can both read from and write to a source. They are a combination of Readable and Writable streams. An example of a duplex stream is a network socket, where you can both read incoming data and write outgoing data.
Transform Streams: These streams are a special type of duplex stream that can modify or transform the data as it passes through. They are particularly useful for tasks like data compression, encryption, or parsing. Examples include the zlib module for compression and the crypto module for encryption.
Streams can be used to process data sequentially, which is beneficial for scenarios where memory efficiency is important. By working with data in chunks, you can avoid loading large amounts of data into memory all at once.
 */

// we need set up big file. to show benefits of streams
// const { writeFileSync } = require('fs');
// for (let i = 0; i < 10000; i++){
//     writeFileSync("./folder/big_file_for_streams.txt", `hello world ${i}`, {flag: "a"}, (err, result) => {
//         if(err){
//             console.log("error")
//         }
//         else {
//             console.log("All done");
//         }
//     });
// }

// we created big file => lets open stream => streams we cal from same fs module

const {createReadStream} = require('fs');

const stream = createReadStream("./folder/big_file_for_streams.txt", {highWaterMark: 90000, encoding: 'utf-8'}); // we open stream to read data by chunk// by default size 64k, but we can control it by highWaterMark

stream.on("data", (result) => {// we listen event data -> which help to manipulate data come from stream
    console.log(result);// see in console that data reads from file by pieces
})

stream.on("error", ()=> {// we listen event error, if some thing happened wrong
    console.log(error)
})