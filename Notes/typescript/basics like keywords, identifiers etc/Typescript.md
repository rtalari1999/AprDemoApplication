what is typescript?
    - Typescript is an open-source, object-oriented programming language.
    - it maintained by Microsoft Corporation.
    - its journey began in 2012.
    - it is a strict super set of javascript.
    - typescript is the superset of javascript.

    Key features of typescript
    ============================
        1. static type checking(optional)
        2. class based objects
        3. modularity
        4. ES6 features
        5. syntactical sugaring

1. static type checking
===========================
    - it allows you to check and assign types to variables, parameters, and function return values.
    - it significantly improves code quality.
    - it helps in preventing bugs and makes your code more readable

2. class based objects
========================
    - Typescript standout feature is it supports for classes.
    - typescript let's you write true object-oriented code
    you can create classes, define constructors and use inheritance etc..,

3. modularity
======================
    - by using modules, you can organize your code into smaller, reusable pieces.
    - This modularity enhances maintainability and collaboration among team members.

4. ES6 features
=================

5. syntactical sugaring
===========================
    - - typescript syntax is closer to that of high-level languages like java.




What is javascript?
=====================================
    - Javascript is a lightweighted, cross-platform, single threaded, and interpreted compiled programming language.
    - it is also known as scripting language for webpages

    client side:
    ============
        - it supplies objects to control browser and its Document object Model(DOM).
        - it allow an application to replace elements on an HTML form.
        - also respond to user events such as mouse cliks, form input and pages navigation.
        - Useful libraries for client side  are AngularJS, ReactJS, VueJS and So many other languages.


        server-side:
        ===============
            - it supplies objects relevent to running javascript on a server.
            - server side extentions allow an application to communicate with a database.
            - With the help of nodejs we are using this javascript as a server side language.
    - do not have type checking

 var a = 10;

 1 line of code to 100 lines

 var a = "Hello";// 99 line

 200  a + 90


Structure of typescript
============================

    - ts code cannot be interpreted by the browser directly so there is a need to compile the ts code into plain javascript code.
    - for this purpose we need typescript compiler(tsc).

Typescript compiler(tsc)
=============================
    - written in typescript itself
    - compiles .ts file to .js
    - npm install -g typescript
    - tsc -v


Identifiers in Typescript:
=================================
    - Identifiers are nothing but the names which is given to the members of any class like a variable, method name, class name, array name etc.


    1. Identifiers name can start with both uppercase as well as lower case letter but cannot start with numbers.

    2. only _ and $ symbols can be used for giving name to identifiers, apart from these symbols, no other special symbol can be used.
    3. Keywords are different from identifiers.
    4. Identifiers are case sensitive and doesnot contain spaces.

Keywords in Typescript:
=====================================
    - Keywords are words which are responsible to perform some specific task.
                    OR
    - The words which represent some specific functionality


    as, any, break,case, else, if, throw, var, number, string, get, type, typeof, private, public


Commnents:
======================
    - Comments are a way to improve readability of a program.
    - We use comments for a better understanding of code for other users.
    - There are two ways to use comments
        - single-line comments ( // )
        - Multi-line Comments ( /* */ )

 What are variables in typescript:
 ===================================
    - The Variable is a named place in memory where some data/value can be stored.
    - They serve as containers for storing data values.
    - variable allows you to store numeric , string, boolean, and other types of information.

Ways to declare a variable in typescript:
=============================================
    var courseName : string = ' Angular Course';
    var courseName: string;
    var courseName = 'Angular'
    var courseName;

    courName = 'Angular';

declaration:
==============
    var name: string;

Assignment:
=================

    name = 'Angular';

Initialization:
=====================
    var name: string = 'Angular';
    var courseName = 'Angular'



Variable declaration in typescript:
====================================

In Typescript, we have three primary keywords for variable declaration:

    var, let and const

    var keyword:
    ===============
        - Traditionally used in Javascript, it has some quirks and scoping rules that can lead to unexpected behaviour.
        - Variable declared with var accessible anywhere within their containg function, module, namespace or global scope.
        - var is a function scope
        - within the function you can access var variables.
        - but outside of the function you cannot access.


    let keyword:
    ===================
        let is introduced to address the limitation of var.
        - let provides block-scoping
        - it allows you to declare variables that are confined to specific blocks of code(such as loops or conditional statements).

    
Data types in Typescript
==============================

    - whenever a variable is created, The intension is to assign some value to that variable but what type of value can be assigned to that variable is dependent upon the datatype of that variable.
    - In Typescript, type system represents different types of datatypes which are supported by Typescript.
    - The data type classification as below:
    =========================================

        1. built-in data type
        2. user defined data type
 1. built-in data type:
=======================================
Built in data type     keyword         Description
Number                  number      It is used to represent both integer as well as                                     floating point numbers

Boolean                 boolean         Represents true and false
String                  string         it is used to represent a sequence of        
                                        characters

 Void                     void           Generally used on functions return 
                                            type       

Null                        null        it is used when an object does not have any 
                                        value
Undefined                   undefined   Denotes value given to uninitialized variable

Any                          any        if variable is declared with any data-type 
                                        then any type of value can be assigned to that variable


Keywords of Built-in Data Types
    ------------------------------
    Built-in Data Type      Keyword

    Number              -   number
    Boolean             -   boolean
    String              -   string
    Void                -   void
    Null                -   null
    Undefined           -   undefined
    Any                 -   any

    i. pre-defined datatypes also called as primitive datatypes.

    String DataType(string) ?
    -----------------------
        i. String is another primitive data type that is used to store text data.
        ii. String values are surrounded by single quatation marks or double quattation marks.

        Example:
        -------
            let empName1:string = 'Emp1';
            //OR
            let empName2:string = "Emp2";

    Number Datatype(number):
    -----------------------
     The Numbers in TypeScript used as both integers as well  as floating-point values.

    Examples:
    --------
        let first:number = 123; // number 
        let second: number = 0x37CF;  // hexadecimal
        let third:number=0o377 ;      // octal
        let fourth: number = 0b111001;// binary  

        console.log(first);  // 123 
        console.log(second); // 14287
        console.log(third);  // 255
        console.log(fourth); // 57

    Boolean DataType(boolean) ?
    -------------------------
        Boolean values are supported in both javascript and typescript and stored as true/false values.

        Example:
        -------
        let isPresent: boolean = true;

        **Note: the  Boolean is different from lower case boolean type. The Upper   case Boolean is object type where as boolean is primitive type.
    
    Void DataType(void) ?
    -------------------
        Similar languages like java, void is used where there is no data. For example, if a function does not return any value then you can  specify void as  return type.

        Example:
        -------
            function sayHi(): void {
                console.log('Hi!');
            }

            let greets: void = sayHi();
            console.log(greets); //undefined

        ** Note: There is no meaning of assign void to variable, as only null or undefined is assignable to void.

        Eamaple:
        -------
            let nothing:void = undefined;
            let num1: void = 1; //error
    Null DataType(null) ?
    -------------------
        i.  Null means, the container is there and it is ready to take value but it already have value called empty or nothing inside container.

        ii. Null values indecate intentional abscence of a value.

        iii. TypeScript is a type-strict language. so, we need to define data typeof the variable. If we want to define with an empty value, we need to define that variable of type Null.

        Example:
        -------
        let val_null:null = null;
        console.log(val_null);

        ** typeof null is object.

    Undefined DataType(undefined) ?
    -----------------------------
        The value Undefined means value is not assined & you don't know it's value.
        ii. it is unintentional absence of value.
        iii. it means  that a variable has been declared but has not yet been assigned a value.

        iv. undefined is the default value for uninitialized variables.

        Example:
        -------
            let val_undefined: any;
            console.log(val_undefined)  //undefined

            ** typeof undefined is undefined.

    Any Data Type(any) ?
    ------------------
        - any is a special data-type, also the super data-type of all data types.


2. user defined data type:
============================
    - Apart from built-in data types, user can also define its own data type.
    - User defined types include Enumeration(enums), classes, interfaces, arrays, and tuples.



Note:
=======

   - In built-in data types, any is a special data-type, also the super data-type of all data types.
   - if a variable is declared with any data type then we can assign any type value to that variable.





