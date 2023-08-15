const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // const text = fs.readFileSync('./folder/big_file_for_streams.txt', 'utf-8');
    // res.end(text); => those two lines will send entire file content to the localhost, but it will be too big and overvelm memory, hard to read by user => we can use streems to sent to local host those file content by chunk

    const fileStream = fs.createReadStream("./folder/big_file_for_streams.txt", 'utf-8');
    fileStream.on('open', () => {
        console.log("done");
    })
    fileStream.pipe(res); // pipe method connect read and write streams

    fileStream.on('error', (err) =>{
        console.log(err)
    })

}).listen(5000);