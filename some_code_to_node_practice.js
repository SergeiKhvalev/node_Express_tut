console.log("Sergei");

const amount = 9n;

if(amount < 10){
    console.log("Small number");
}
else if(amount >= 10){
    console.log("Big number");
}
else{
    console.log("Zero");
}

/*
GLOBAL variables  CONCEPT ---- in node No Windows
GLOBAL variables means it is available everywhere in project

__dirname  - path tp current directory
__filename - file name
require - function to use modules (CommonJS)
module - info about current module (file)
process - info about env where the program is being executed
 */
console.log(__dirname);
console.log(__filename);
//console.log(require);
//console.log(process);

// from browser we have setTimeOut and setInterval => we can run it right in node

// console.log(
//     setInterval(() => {
//         console.log("Hello my")
//
// }, 1500
// ))

console.log("=======================Modules======================");
// in CommonJS every file is module (by default)
//Module  - Encapsulated Code (only share minimun)
// to import shared module need use require


// we can require content of needed file(file=module) syntax below
const namesImported = require('./to_export_import_practice/names'); // Importing variables from names.js // we can destruct imported object => { eva }
const funcImported = require('./to_export_import_practice/utils'); // Importing the sayHi function from utils.js

// Call the sayHi function using the imported variables
funcImported("Luba");
funcImported(namesImported.katy); // eva if required object been destructed

console.log("======require data which has been exported with another syntax=======");

const data = require("./to_export_import_practice/6_alternative_flavor-way_to_export")

console.log(data);
console.log(data.items);
console.log(data.singlePerson);

console.log("==================== one more thing about import_export================")
require("./to_export_import_practice/export_called_function"); // so if we require file (file = module), where we called function it will be executed in file where we required those module