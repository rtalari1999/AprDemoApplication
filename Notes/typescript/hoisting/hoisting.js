//counter = 1; // assign
console.log(counter); // printing that value
var counter; // declaring a variable
// console.log(counter1);
// let counter1;
// hoisting is not possible with block scoped variables.
// console.log(counter2);
// const counter2 = 1;
// after javascript engine executes
// var counter;
// //counter = 1;
// console.log(counter);
//Function Hoisting
sum6(); // calling function
function sum6() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log('sum of a + b is :', c);
}
arrow();
var arrow = function () { return console.log('hello'); };
// After execution
// function sum6(){
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     console.log('sum of a + b is :', c);
// }
// sum6();// calling function
