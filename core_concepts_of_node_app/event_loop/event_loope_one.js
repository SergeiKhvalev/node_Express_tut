// example of event loop
const { readFile } = require('fs')

console.log("start a first task"); // will be executed first

readFile("./folder/first_content.txt", 'utf-8', (err, result) => { // event loop will off load that task because need more time to execute it
    if(err){
        console.log(err);
        return
    }
    else {
        console.log(result);// cause need time to read file it will be executed last
        console.log("read file task completed");
    }
})

console.log("start next task"); // can be executed immediately => second


// event loop example

