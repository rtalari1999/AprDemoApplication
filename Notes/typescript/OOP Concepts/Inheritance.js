// object oriented programming (OOP) concept
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
/**
 * classes and object
 * inheritance
 * polymophism
 * abstract
 * encapsulation
 */
/**user  */
//  What is inheritance?
var Parent = /** @class */ (function () {
    function Parent() {
        this.firstName = 'xyz';
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.display = function () {
        this.firstName;
        console.log("Hello ".concat(this.firstName, "."));
    };
    return Child;
}(Parent));
var SubChild = /** @class */ (function (_super) {
    __extends(SubChild, _super);
    function SubChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubChild;
}(Child));
var parent1 = new Parent();
parent1.firstName;
var child = new Child();
child.display();
child.firstName = 'abc';
/**
 * TypeScript supports single inheritance and multilevel inheritance.
 */
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return C;
}(B));
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var Loan = /** @class */ (function () {
    function Loan() {
    }
    return Loan;
}());
var HomeLoan = /** @class */ (function (_super) {
    __extends(HomeLoan, _super);
    function HomeLoan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HomeLoan;
}(Loan));
var CarLoan = /** @class */ (function (_super) {
    __extends(CarLoan, _super);
    function CarLoan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarLoan;
}(Loan));
var PersonalLoan = /** @class */ (function (_super) {
    __extends(PersonalLoan, _super);
    function PersonalLoan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PersonalLoan;
}(Loan));
//150 methods  150 min
// 210
//inheritance
// disadvantages
//==============
// duplicating the code
// waste of Time on writing same code
// reduces the performance
var Parent3 = /** @class */ (function () {
    function Parent3(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    } // constructor with some parameters
    return Parent3;
}());
//var parent3 = new Parent3('xyz', 'abc');
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2(fName, lName, dob) {
        var _this = _super.call(this, fName, lName) || this;
        _this.dob = dob;
        return _this;
    }
    return Child2;
}(Parent3));
var child2 = new Child2('xyz', 'abc', '10/10/20');
var ParentA = /** @class */ (function () {
    function ParentA(sName) {
        this.surName = sName;
    }
    ParentA.prototype.display = function (sName) {
        //this.surName = sName;
        console.log("Hello ".concat(this.surName));
    };
    return ParentA;
}());
var parentA = new ParentA('constructor'); // object is created for PArentA
//Initialize variables using object variables.
//parentA.surName = 'abc';
//Initialize variables using method
parentA.display('abcd');
//Initialize variables using constructor
var ChildB = /** @class */ (function () {
    function ChildB() {
    }
    return ChildB;
}());
