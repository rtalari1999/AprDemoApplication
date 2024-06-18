var a1 = 2, a2 = "2";
var a3 = '2';
//2 == '2';// true
//2 === '2';// false // it will compare both values as well as compared its data type
//1 it will compare both values
//2 it will also check its data type
//- a1 is the first value and a2 is the second value. in between > is the comparison UnaryOperator.
var a4 = 'Hello';
if (a4 == 'World!') { // true
    console.log(' a1 is equal to 2'); // if block
}
else if (a4 == 'Hello!') {
    console.log('Invalid gmail or pwd'); // else block
}
else if (a4 == 'Hello.') {
    console.log(' else if example');
}
else {
    console.log('else block is executed.');
}
// while loop
// while loop repeatedly executes a block of code as long as a specified condition is true.
var a5 = 1; //a5 = 1
while (a5 < 6) { // 1 < 6 // true ==>> 2 < 6 true ==>>> 6 < 6//false
    console.log(a5);
    a5 += 1; // a5 = a5 + 1; a5 = 1 + 1 ==>> a5 = 2; ===>>> a5 = 2 + 1 a5 = 3==>>> a5 = 6
}
// output
/**
 * 1
 * 2
 */
var a6 = 1;
do {
    console.log(a6);
    a6 += 1; // a6 = a6 + 1; 1 + 1 = 2; 2 + 1 = 3, 4, 5; 5 + 1=6
} while (a6 < 6);
/**
 * a6 = 1, 2,3,4, 5
 */
//for loop
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.length);
for (var i = 8; i < 8; i++) { // true 0 < 8 i++==>> i=i + 1 ==>> i = 0 + 1 ; i=1;
    //for block
    console.log(i);
}
/* Output of for loop
0,1, 2, 3, 4, 5, 6, 7
*/
// initialExpression
// Condition
// updatedExpression
//installing pre requisites
//Angular
// switch .... case
var trafficLight = "green";
var message = "";
switch (trafficLight) {
    case "red":
        //message = "Stop Immediately";
        console.log("Stop Immediately");
        break;
    case "yellow":
        //message = " Prepare to stop";
        console.log(" Prepare to stop");
        break;
    case "green":
        //message = " Proceed or continue driving";
        console.log(" Proceed or continue driving");
        break;
        console.log("Stop Immediately");
    default:
        //message = "Invalid traffic light color";
        console.log("Invalid traffic light color");
}
console.log(message);
for (var i = 0; i <= 5; i++) {
    if (i == 1) {
        //
        break; // break statement
    }
    console.log('Example for break statement', i);
}
// continue statement
// display odd numbers
for (var i = 0; i <= 5; i++) {
    if (i % 2 == 0) {
        continue; // continue statement
    }
    console.log('Example for continue statement', i);
}
