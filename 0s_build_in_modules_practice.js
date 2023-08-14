// OS build_in module. Help to communicate with Operating system as well as with server
const os = require("os"); // because it is node build in module we no need define path to module. or we can destruct module { define specific }
// info about current user
const userInfo = os.userInfo();
console.log(userInfo);

// method returns the system uptime in seconds
console.log(`The system uptimen is ${os.uptime()} in seconds`);

// wrap some os function to object

const currentOSInfo = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freMemory: os.freemem()
}

console.log(currentOSInfo);

