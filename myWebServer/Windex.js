let http = require("http");
console.log(http);

let random = require("../randomNumber/Rindex");
console.log(random);

//create a server object:l

let serve= http.createServer((req, res) => {
    res.write("Request received and processed"); //write a response to the client
    res.end();
    res.se
    // res.sendDate(`${x}`);
    // let Z= random.randomNumber();
    // res.end(`Request received and processed ${Z}`); //end the response
})
serve.listen(1234, function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Server running");
}); //the server object listens on port 1234
















































































// let array = [1, 2, 3, 4, 5];
// module.exports = {
//   get random_array_member() {
//     return array[Math.floor(Math.random()*array.length)]
//   }
// }
// console.log(module.exports);