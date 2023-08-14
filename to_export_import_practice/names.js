//each file in CommonJS considering as module => we can export content of that module by defining what need to export => module.exports

const sergei = "Sergei";
const katy = "Katy";
const eva = "Eva";

// in order to share module with another part of app
module.exports = {sergei, katy, eva};



