What is class?
	- A class is a template or blueprint for creating objects.
	- A class can include the following:

		- Constructor :  It is responsible for initializing the object in memory.
		- Properties : Properties are nothing but a variable declared in a class.
		- Methods : It represents an action for the object.

	- A class is a logical entity.
		Example:
			class Employee {

			// these variables are nothing but instance variables or global variables.

				eid:number; 
				ename: string;
				deptno: number;

				display(): void {
				// what ever the variables created inside the method are called local variables.


				// to access instance variables we need to use this keyword.
				// directly we can not call instance variables.

				console.log(this.eid)
				}
			}

			// how to create an object for this class as shown below.
			// we can create any number of objects.

What is Object?
	- Object is an instance of class.
	- An object is a physical entity.
	- when we create object it will allocate some memory to these objects because 
	  objects are physical entity.
	- we are going to work with objects because class is just a blueprint but we can 
	  create multiple object with class.

How to create an object:
=========================

	  var emp = new Employee();  //object creation

	  emp:  is the object reference or copy.
	  ====

	  new keyword:  is used to instantiating the object in memory
	  ==========

//To access properties and methods from object is below and assign values to them.

	//Properties
		  emp.eid = 101;
		  emp.ename = 'John';
		  emp.deptno = 6;

	//Methods
		  emp.display();

initializing a variables in class:
==================================
		- There are three diffrent types of approaches to initialize a class variables.

			1) Initialize variables using object variable.
			2) Initialize variables using method.
			3) Initialize variables using contructor.


What is constructor?
=====================
	- constructor if you want to create, you can use constructor keyword.
	- constructor can also accept the arguments.
	- constructor does not return any value even void.

The difference between the constructor and method:
===================================================
	constructor: is when ever we create a object for this class this contructor will be invoked. So, we no need to call a contructor explicitly.

	but,

	if we create a method we have to call a method through the object.


