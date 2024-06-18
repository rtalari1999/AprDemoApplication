// object oriented programming (OOP) concept

/**
 * classes and object
 * inheritance
 * polymophism
 * abstract
 * encapsulation
 */

/**user  */


//  What is inheritance?
class Parent {
    firstName: string = 'xyz';
}

class Child extends Parent{

    display():void{
        this.firstName;
        console.log(`Hello ${this.firstName}.`)
    }
}

class SubChild extends Child{
}

var parent1 = new Parent();
parent1.firstName;

var child = new Child();
child.display();
child.firstName = 'abc';

/**
 * TypeScript supports single inheritance and multilevel inheritance.
 */


class A{}
class B extends A {}
class C extends B {}
class D extends C {}


class Loan {


    //20 Properties

    //50 methods inside loan class
}

class HomeLoan extends Loan{
    //20 properties
    // 50 methods

    // total 50 
}

class CarLoan extends Loan {
    //20 properties
    //50 methods

    // 50
}

class PersonalLoan extends Loan {
    // 20 properties
    // 50 methods
    //50
}
//150 methods  150 min
// 210

 //inheritance


 // disadvantages
 //==============
// duplicating the code
// waste of Time on writing same code
// reduces the performance


class Parent3 {
    fName: string;
    lName: string;

    constructor(fName: string, lName: string){
        this.fName = fName;
        this.lName = lName;
    }// constructor with some parameters
}

//var parent3 = new Parent3('xyz', 'abc');

class Child2 extends Parent3{
    dob: string;
    constructor(fName: string, lName: string ,dob: string){
        super(fName, lName);
        this.dob =dob;
        
    }


}

var child2 = new Child2('xyz', 'abc', '10/10/20');







class ParentA {
    surName : string ;// declaring a variable

    constructor(sName: string, age: number){
        this.surName = sName;
    }
}


class ChildB extends ParentA{
    schoolName: string;
    constructor(schoolName: string, surName: string){
        super(surName,10);
        this.schoolName = schoolName;
    }

    display(){
        console.log(this.surName)
    }
}

var childB = new ChildB('abcde', 'aaa');







//var parentA = new ParentA('constructor')// object is created for PArentA
//Initialize variables using object variables.
//parentA.surName = 'abc';


//Initialize variables using method
//parentA.display('abcd');

//Initialize variables using constructor
