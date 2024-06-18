console.log("Hello World!");
var courseName = ' Angular Course';
courseName = 'HTML Course';
courseName = " CSS Course ";
var age = 10;
age = 25;
var idWithoutValue;
idWithoutValue = 'Hello world!';
var userName = 99;
userName = 55;
var userEmail;
userEmail = 99;
userEmail = 'Exapmle@gmail.com';
userEmail = true;
userEmail = null;
userEmail = undefined;
var Example = /** @class */ (function () {
    function Example() {
        /* Hello world
         is the basic program
        
        
         I have been started to learn ts
        */
        //start with lower case as well as upper-case
        this.sub = 10; //valid
        this.Multi = 10; // valid
        // cannot start with number
        //1Add = 10; // invalid
        this.add1 = 10; // valid
        //Symbols
        this.Add_ = 10; // valid
        this.add$ = 10; // valid
        this.add = 10;
        this._add = 10; // valid
        this.$add = 10; // valid
        this._$add = 10; // valid
        // case sensitive
        this.example = 'Hello World!';
        this.Example = ' Case Sensitive';
        this.ExAmple = 10;
    }
    return Example;
}());
function add() {
    var name1 = 'name';
    var name4 = 'name4';
    console.log(name1);
    if (name1 == 'name') {
        var name2 = 'name2';
        var name3 = 'name3';
        console.log(name2);
    }
    console.log(name2);
    console.log(name1);
    console.log(name3);
}
//console.log(name1)
console.log(name2);
