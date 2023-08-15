setInterval(()=>{
    console.log("Hello , This is set interval")
}, 1000);// because need delay for 2 sec => event loop will off load that line

console.log("For immediate execution");// will be executed first
