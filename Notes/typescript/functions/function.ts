
// named functions



// function declaration
function calculate(){  // function
    // statements

    let a = 10;
    let b = 20;

    let c = a + b;
    console.log('sum of x + y is', c);
}


// calling a function
calculate();






function display(x:number=0 , y:number, a:number = 1){ // parameters
    let z = x+ y + a;
    console.log('sum of x + y is', z, 'sum of x is', x,'sum of x is',a);
}

display(10, 20) // aurguments
display(100, 200);


//default parameters
//optional parameters








// data types
function Greeting():boolean
{
    return true;
}

Greeting();
console.log(Greeting());



// function without a name

// this type function is nothing but anonymous function


const sum1 = function(x:number, y:number): number{
    let a = 10;
    let b = 10;
    let c = a + b;
    console.log('result of c :', c);
    return c;
}

//()
sum1(10,10);


// arrow function
  const sum2 = ()=>{}


  const sum3 = (x:number, y:number):any=>{
    let a = 10;
    let b = 10;
    let c = a + b;
    console.log('result of c :', c);
  }
// this is for single line statements in function body
  const sum4 = (x:number, y:number):number => x+y;



  // this is for multiple line of statements in function
  const sum5 = (x:number, y:number):number =>{
    console.log(x)
    return x+y
  }


  // calling arrow functions.
  sum4(10,10);


  //Note : follow camelCases
             //-  While naming function name please follow camelcases.

























class Calcumation{
    naming(){
        let a = 10;
    let b = 20;

    let c = a + b;
    console.log('sum of a + b is', c);
    } // method
}


// function

//id
//var
//key
//fun
//datatypes  void, undefined and null 
// loops
// OOPs
