// class keyword
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    /**
     * What is contructor?
     *  - Constructor if you want to create, you can use construct keyword.
     *  - Constructor does not return any value even void also
     */
    function Student(sName, sAge, sRollNo) {
        this.name = sName;
        this.age = sAge;
        this.rollNo = sRollNo;
        this.display();
    }
    //  getStudentDetails(sName: string, sAge: number, sRollNo: number):void {
    //         // if you are declaring a variable inside the method nothing but a local variables.
    //         this.name = sName;
    //         this.age = sAge;
    //         this.rollNo = sRollNo;
    //     }
    //methods 
    Student.prototype.display = function () {
        console.log("Mr/Ms. ".concat(this.name, " can eat multiple times."));
        console.log(this.name);
        console.log(this.age);
        console.log(this.rollNo);
    };
    return Student;
}());
//object
var student = new Student("Teja", 10, 109); // object creation
// student.age = 10;
// student.name = 'john';
// student.rollNo = 101;
// student.display();
//student is reference variable of the Student class.
// new keyword is used to instantiate some space inside memory.
// second approach
/**
 * first create one method and take some parameters and assign that parameters with global variables.
 *
 */
// student.getStudentDetails("jannu",15, 106);
// student.display();
//third approach
/* There are three different types of approaches to initialize a class variable

    1. Initialize variables using object variables.
    2. Initialize variables using method
    3. Initialize variables using constructor

    */
/**
 * The difference between the constructor and method :
 * ===================================================
 *  Constructor: is when ever we create a object for this class, contructor will be invoked. So, we need not to call a constructor explicitly
 *
 * but,
 *
 * if we create a method we have to call a method through the object.
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sound = function () {
        console.log('Animal sound');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.sound = function () {
        console.log('bow bow');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sound = function () {
        console.log('meowww');
    };
    return Cat;
}(Animal));
function animalSound(animal) {
    animal.sound();
}
var animal = new Animal();
var animal1 = new Dog();
var animal2 = new Cat();
animalSound(animal);
animalSound(animal1);
animalSound(animal2);
//abstract class and method in typescript
var Person = /** @class */ (function () {
    function Person(pName) {
        this.pName = pName;
    }
    Person.prototype.display = function () {
        console.log(this.pName);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.find = function () {
        return new Employee('Raju');
    };
    return Employee;
}(Person));
var emp = new Employee('Teja');
emp.display(); // 
var emp2 = emp.find();
