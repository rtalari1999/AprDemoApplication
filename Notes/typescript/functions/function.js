// named functions
// function declaration
function calculate() {
    // statements
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log('sum of x + y is', c);
}
// calling a function
calculate();
function display(x, y, a) {
    if (x === void 0) { x = 0; }
    if (a === void 0) { a = 1; }
    var z = x + y + a;
    console.log('sum of x + y is', z, 'sum of x is', x, 'sum of x is', a);
}
display(10, 20); // aurguments
display(100, 200);
//default parameters
//optional parameters
// data types
function Greeting() {
    return true;
}
Greeting();
console.log(Greeting());
// function without a name
var sum1 = function () {
    var a = 10;
    var b = 10;
    var c = a + b;
    console.log('result of c :', c);
};
//()
sum1();
var Calcumation = /** @class */ (function () {
    function Calcumation() {
    }
    Calcumation.prototype.naming = function () {
        var a = 10;
        var b = 20;
        var c = a + b;
        console.log('sum of a + b is', c);
    }; // method
    return Calcumation;
}());
// function
