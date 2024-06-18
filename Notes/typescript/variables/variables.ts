// variables var, let and const


function add(){
    var a = 10;  // var keyword is a block-scope
    var b = 20;
    var c = a+b;

    let letkeyword: number = 10;
// block 
    if(a == 10){
        let letkey:number = 20;
        var name1 = 'addition';
        console.log('let keyword within the function:' , letkey);

        console.log('name of a variable within a block' , name1);
    }
// end of the block

    //console.log('let keyword within the function:' , letkey);

    //console.log('2nd name of a variable within a block' , name1);
    console.log('result of a + b:' , c);


    // let keyword example
    console.log('let keyword within the function:' , letkeyword);
}
//console.log('printing outside of the function', c)



add();


function fun(){
    var game: string = 'chess';// init

    var game: string = 'cricket'; // re- declaring a variable is possible with var keyword
    game = "chess"; // re- assigning a value to var keyword variable

    //var game:boolean = 20;// not possible

    //block
    if(game == 'chess'){
        var players:number = 2;
    }
    //console.log(players, game);


    // var keyword is functional scope i.e if you init/declare a variable with var  anywhere within function, you can access anywhere within function 
    //var allows you to re declare a variable
    // var allows you to re assign a value
    // var does not allow re declaration with different data type i.e during redeclaration variable data type must be same as previous declaration.


}

function fun1(){
    let game1: string = "cricket";
    let game2 : string = "chess"; //re-declaration is not possible with let keyword
    game2 = 'cricket';// but you can reassign value to let keyword

    if(game1 == "cricket"){
        let players:number = 11;
        console.log('players', players);
    }
    if(game2 != "cricket"){
        let players:number = 12;
        console.log('players', players);
    }

    
    //console.log('players outside', players)


    // let is a block-scoping
    // re-declaration is not possible but you can re-assign a value to that variable
    //

}
fun1();

function fun2(){
    const game:string = "cricket";
    //const game: string = 'chess';// cannot re declare block scoped variables
    //game = 'chess';


   

     const xyz = 'xyz';

    if(game == "cricket"){
        const players: number = 11;
        console.log('const within block', players);
    }
    console.log('players', game);


    // const is also similar to let but there is some difference.
    // const is also block-scoping
    // but the difference is re-declaration as well as re-assign a value to variable is not possible.


    // const is also block-scoping
    // we cannot re-declare a const variable 
    // we cannot re-assign value to const variable.
    
}


// While naming variable please follow camel cases.