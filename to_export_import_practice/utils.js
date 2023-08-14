//each file in CommonJS considering as module => we can export content of that module by defining what need to export => module.exports

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

// in order to share that function with another part of app
module.exports = sayHi;
