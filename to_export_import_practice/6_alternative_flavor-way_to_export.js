console.log("================alternative way to module exports=====export right away=======")
module.exports.items = ["1", "2"]; // we export array right away, without creating variable



const objectToExp = {
    name: "Fluffy"
}
module.exports.singlePerson = objectToExp; // one more syntax to export