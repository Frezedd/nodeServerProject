let http = require('http');
console.log(http);

//create a server object:

let serve= http.createServer((req, res) => {
    console.log(req);
    console.log(res);
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
})
serve.listen(1234, function() {
    console.log("Server running", serve.listen);
}); //the server object listens on port 1234



// let array = [1, 2, 3, 4, 5];
// module.exports = {
//   get random_array_member() {
//     return array[Math.floor(Math.random()*array.length)]
//   }
// }
// console.log(module.exports);