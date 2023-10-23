function randomNumber() {
    return Math.floor(Math.random()*20);
}
console.log(randomNumber());

module.exports.randomNumber=randomNumber
// console.log(module.exports);





// Function to generate random number
// function randomNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log("Random Number between 1 and 10: ")
// // Function call
// console.log( randomNumber(1, 10) );


    
