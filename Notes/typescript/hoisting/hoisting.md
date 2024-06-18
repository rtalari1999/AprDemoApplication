What is hoisting?
========================

    - When the javascript engine executes the javascript code, it creates the global execution context.
    - The global execution context has two phases:
        1. Creation
        2. Execution

    During cretion phase, The javascript engine moves the variable and function declarations to the top of your code. This is known as hoisting in javascript.


    variable hoisting
    ==================
        - Variable hoisting means the javascript engine moves the variable declarations to the top of the script.


        console.log(counter); // printing that value
        var counter ; // declaring a variable


    Note : hoisting is possible with only var keyword
            - let, const does not support hoisting.



    Function Hoisting:
    ======================
        //Function Hoisting
        sum6();// calling function

        function sum6(){  // function declaration
            let a = 10;
            let b = 20;
            let c = a + b;
            console.log('sum of a + b is :', c);
        }


        // After javascript engine execution function declaration moves to the top of the script. like below
        function sum6(){  // function declaration
            let a = 10;
            let b = 20;
            let c = a + b;
            console.log('sum of a + b is :', c);
        }
        sum6();// calling function.


        Note: hoisting is possible with named functions
            - it does not support anonymous functions and arrow functions.
            
