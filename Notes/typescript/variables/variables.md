## What is variable in typescript ?
    i. A variable is a named location in memory to store data.
    ii. In TypeScript OR JavaScript , There are three different keywords to define  variables: var, let, and const.

    Rules:
    ------
    i. Variable names can contain alphabets and digits but variable names cannot  start with  adigit.
    ii. Variable names cannot  start  with a digit .
    iii. Allowed special  characters are _ and $. 
    iv. Use camel cases for variables
    v. not too short / not too long 
    vi. A-Z, a-z, 0-9, $, _ allowed in variable names.
    vii. Each variable is case sensitive.
    viii. Start letter should be capital for classes, interfaces and Enum

    There are three different keywords to define variables:
    -------------------------------------------------------
        var, let and const

    var Keyword:

    i. var is function scope

    declaration:
        i. To create a value without a value, we use one of special keywords, var. This is known as variable declaration.
        ii.When we declare variable we are naming it and then registering it within the scope we desire.
        iii. We can also use the let keyword to declare variable.
        var x; // declared
        console.log(x) //undefined

        let name:string; //declaration

    Assignment:
    ----------
        i. Now that we have variables, we can store values in them. this is known as assignment.
        ii. To assign a value to variable, we write the name of the variable, followed by =(equals) operator and lastly, the value we want.


        Example:
        -------
            season = "Summer"; // Assignment

        **Note: We dont use var OR lrt keyword while assign value. The variable already exists, we are just adding a value to it.

    Initialisation:
    --------------
        i. We don't have to declare a variable and assign a value to it aftervards, we can do both in a single step. This is known as initialization.
        Example:
        -------
            var name: string = 'name'; // initialization
            let name: string = 'name'; // initialization

    How to use a variable ?
    ---------------------
        To use a variable, we simply refer to identifier wherever we need to use it in our code.
            Example:
            --------
                let num1 = 5;
                let num2 = 3;
                let result = num1 + num2;
                console.log(num1," + " , num2, " = " , result);

    How to change the value of variable ?
    -----------------------------------
        Variables in typescript are mutable, which means we can change their values while the application is running(at runtime).
        to change the value of a variable, we simply assign it to a new one with assignment operator.
         Example:
            --------
                let num1 = 5;
                let num2 = 3;
                let result = num1 + num2;
                console.log(num1," + " , num2, " = " , result);
                //mutate variable
                result = num1 * num2;
                console.log(num1," + " , num2, " = " , result);
            This time we change  the value of result by performing a different calculation.

            var keyword ?
            -----------
            i. var is function scope variable
            ii. var allows declaring, rendering OR assign and initialization.
            iii. var allows shadowing
                function Demo(){
                        var x = 10;
                        if(x === 10){
                            var x = 20;
                            
                        }
                        console.log(`x = ${x}); //
                    }
            iv. var allows hoisting
                function Demo(){
                         x = 10;
                        if(x === 10){
                            let y = 20;
                            console.log(`x = ${x} y=${y}); //valid
                        }
                        var x;
                        console.log(`x = ${x} y=${y}); //y is error
                    }

        let keyword ?
        -----------
            i. let is block scope.
                Example:
                -------
                    function Demo(){
                        var x = 10;
                        if(x === 10){
                            let y = 20;
                            console.log(`x = ${x} y=${y}); //valid
                        }
                        console.log(`x = ${x} y=${y}); //y is error
                    }
            ii. let can be declared, assign and initialize.
            iii. let will not support shadowing.
            iv. let allows reassigning value to variable.

        Const KeyWord ?
        -------------
            i. const is also same as let but in const it doesnot allow  reassign of value.
            ii. const is Block-Scope.
            iii. const will not support shadowing.
            iv. 'const' declarations must be initialized.
                Example:
                --------
                    function fun4():void {
                    const cnst1:string = '';
                    const clgName: string = 'Iare';
                    if(1 === 1){
                        const clgName = 'MLR'
                        console.log(clgName);
                    }
                    console.log(clgName);  
                    }
                    fun4();


## differences between var, let and const ?

    var Keyword                 let Keyword                  const keyword
    ===========                 ===========                 ===============
----------------------------------------------------------------------------------------------
1.var is functional scope       let is block scope        const is block scope
----------------------------------------------------------------------------------------------
2.it allows declare, assign           Yes                 only initialization is possible
   and initialization 
----------------------------------------------------------------------------------------------
3. it allows hoisting            Not possible              Not possible      
----------------------------------------------------------------------------------------------
4. it allows redeclare           Not possible              Not possible
    a variable
----------------------------------------------------------------------------------------------
5. reassign value to a           Yes                        No
    variable
----------------------------------------------------------------------------------------------


