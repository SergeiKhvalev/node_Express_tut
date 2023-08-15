console.log("First task"); // will be executed first

setTimeout(()=>{
    console.log("Second task"); // because nee time will be executed last
},1);

console.log("Third task3")// no need time will be executed second