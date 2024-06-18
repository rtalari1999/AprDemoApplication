Functions in Typescript?
====================================
    -  function is a set of statements that  performs a task or calculates a value.
    - Functions are the primary blocks of any program.
    - Advantages of functions
    ============================
        Code Reasuability: We can call a function several times without writing the same block  of code again .
        - The code reusability  saves  time and  reduces  the program size.

        Less coding: Function makes our program compact. So, we don't need to write many lines of code  each time to perform a common task.

        Easy to debug: It makes the programmer easy to locate and isolate  faulty information.


         Example:
        --------
            function sum(){
                return;
            }

    ii. function declaration, or function statement consists of the  function keyword, followed by:
        i. The name of the function.
        ii.A list of parameters to the function, enclosed in parantheses separated by commas.
        iii.statements that define the function, enclosed in curly braces, {/*...*/}.


    functions can also be created by a function expressions.
        such functions can be anonymous; it does not have to have a name.
        Example:
        --------
        const square = function (){
            return;
        }

        ***Note: 
        ========
            i.Parameters defined in the function declaration.
            
            ii.you can provide arguments(actuall values) for the  parameters defined in the function declaration.

            =>  Fat Arrow Function

            
How do you specify a return type of a function ?
================================================
    To specify a return type to function, you can use :(colon) followed by the desired data type after the function's parameters list.
    Example:
    ---------

    function fun() : number {
        return 9;
    }