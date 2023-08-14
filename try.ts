
const sergei: string = "Sergei";
const katy: string = "Katy";
const eva: string = "Eva";

// in order to share module with another part of app
module.exports = {sergei, katy, eva};


// OS build_in module. Help to communicate with Operating system as well as with server
const os = require("os"); // because it is node build in module we no need define path to module. or we can destruct module { define specific }
// info about current user
const userInfo = os.userInfo();
console.log(userInfo);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} in seconds`);