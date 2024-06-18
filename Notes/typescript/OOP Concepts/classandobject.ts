// class keyword


class Student {
    // properties
    // instance variables or global variables
    name!:string;
    age!: number ;
    rollNo: number | undefined;

/**
 * What is contructor?
 *  - Constructor if you want to create, you can use construct keyword.
 *  - Constructor does not return any value even void also
 */


constructor(sName: string, sAge: number, sRollNo: number){

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
    display():void{
        console.log(`Mr/Ms. ${this.name} can eat multiple times.`);
        console.log(this.name);
        console.log(this.age);
        console.log(this.rollNo);
    }
}

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

