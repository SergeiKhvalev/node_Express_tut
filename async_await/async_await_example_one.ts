// with async function and awaits code much more better then with callback

const { readFile } = require('fs');

const getTextFromFile = (path) =>{ // we create function
    return new Promise((resolve, reject) =>{// function return Promise. to correct handle promise we use callback fucntion (resolve, reject)
        readFile(path, 'utf-8', (err, data) => {
            if(err){
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}
const start = async () => {
    try {
        const first = await getTextFromFile("./folder/second_content.txt");
        const second = await getTextFromFile("./folder/first_content.txt");
        console.log(first)
        console.log(second)
    }
    catch(error){
        console.log(error)
    }
}

start();