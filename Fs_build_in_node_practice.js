/*
In JavaScript, the "fs" module stands for "file system" and is used to interact with the file system on your computer. It provides methods to read, write, manipulate, and interact with files and directories. The "fs" module is commonly used in Node.js applications to perform file-related operations.
Here are some of the key functionalities provided by the "fs" module:
Reading Files: You can use functions like fs.readFile() or fs.readFileSync() to read the contents of a file.
Writing Files: Functions like fs.writeFile() or fs.writeFileSync() allow you to write data to a file or create a new file if it doesn't exist.
Working with Directories: The "fs" module provides methods to create, remove, and manipulate directories using functions like fs.mkdir(), fs.rmdir(), and fs.readdir().
Renaming and Moving Files: You can use fs.rename() to rename or move files.
File and Directory Information: Functions like fs.stat() provide information about a file or directory, such as its size, permissions, and more.
Deleting Files: You can use fs.unlink() to delete files.
Watching Files: The fs.watch() function allows you to monitor changes to files and directories.
 */
//const {readFileSync} = require("fs") import with destructing => we import specific method from fs module
const fs = require("fs");// we import whole module
const path = require("path");


const path_to_file = path.join("/folder", "first_content.txt");
console.log((path_to_file))
// to synchronized read file
const read_first_file = fs.readFileSync('.' + path_to_file, "utf-8");
const read_second_file = fs.readFileSync('./folder/second_content.txt', "utf-8");

console.log(read_first_file);
console.log(read_second_file);

// to synchronized write in file needed content

const write_in_file = fs.writeFileSync('./folder/write_in_result.txt', `Here is write in text: ${read_second_file, read_second_file}`);// if in given directory file will not be found, it will be created// that file will be rewriten with every execution
// but we can append new content to file

const append_content = fs.writeFileSync("./folder/write_in_result.txt",
    " appended text",
    {flag: 'a'});

// we can read and write files with help of async methods => fs.readFile fs.writeFile . with that finctions we need provide call back
// because it is asynhonised works as Promise (but it void), we need call back function with (err, result)
const readFile_async = fs.readFile("./folder/write_in_result.txt", "utf-8", (err, result) =>{
    if(err){
        console.log(err);
    }
    else{
    console.log(result)
}});
console.log(readFile_async);

// to sync read and then write in file need use callback functions in correct way/ or we can use await/ or promises
fs.readFile("./folder/first_content.txt", "utf8", (err, result) =>{
    if(err){
        console.log(err);
        return// to stop execution if err
    }
   else{ // if we read first file sucsessfully => go and read second file
        const first = result + "Khvalev1";// to store file content
        fs.readFile("./folder/second_content.txt", "utf8", (err, result) =>{
            if(err){
                console.log(err);
                return
            }
            else{// if we read secnd file sucsessfully => go and write in both in new file file
                const second = result + "Sergei1";// to store file content
                fs.writeFile('./folder/write_in_async_result.txt', `Here is the results: ${first}, ${second}`, (err, result) => {
                    if(err){
                        console.log(err);
                       return
                    }
                    else{
                        console.log("!!", result);// will be undefined, because function not return anything
                    }
                })
           }
        })

    }

});



