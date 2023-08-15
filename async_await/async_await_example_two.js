//
//
// const { readFile } = require('fs');
//
// const getTextFromFile = (path) =>{ // we create function
//     return new Promise((resolve, reject) =>{// function return Promise. to correct handle promise we use callback fucntion (resolve, reject)
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }
// const start = async () => {
//     try {
//         const first = await getTextFromFile("./folder/second_content.txt");
//         const second = await getTextFromFile("./folder/first_content.txt");
//         console.log(first)
//         console.log(second)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
//
// start();

// Code above is perfect, but we can use util module, and avoid getTextFromFile function, which wrap result in Promise. We can use util module, which build in nodeJS, which provide promisify method
const { readFile, writeFile } = require('fs');// valid syntax al well :  const { readFile, writeFile } = require('fs').promises;
const util = require('util');

const readFilePromise = util.promisify(readFile); // we promisify readFile function => it will return Promise automatically
const writeFilePromise = util.promisify(writeFile);// we promisify writeFile function => it will return Promise automatically


const start = async () => {
    try{
        const first = await readFilePromise("./folder/second_content.txt", "utf-8");// await because it still return Promise
        const second = await readFilePromise("./folder/first_content.txt", "utf-8");
        await writeFilePromise("./folder/write_in_async_result.txt", `THIS IS AWSOME ${first}, ${second}`);
        console.log(`Text : ${first}, ${second}`);
    }
    catch(error) {// catch errors if Promises will be rejected
        console.log(error);
    }
}

start()