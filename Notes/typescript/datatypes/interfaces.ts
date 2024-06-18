interface IUser {
    name: string ;// it allows only declaration but not initialization
    age: number ;
    gender: string ;
    isActive: boolean ;
    show(name: INames):void;
    display():void;
    view(): void;
}

interface INames{
    name:string;
    age: number;
}

class User implements IUser{// implements keyword is for interfaces and extends keyword is for inheritance
    uName: INames ;
    name: string ;// it allows only declaration but not initialization
    age: number ;
    gender: string ;
    isActive: boolean ;
    constructor( x:INames){
        this.name = 'demo user';
        this.age = 10;
        this.gender = 'Male';
        this.isActive = true;
        let a = {name:'Raju', age:10}
        this.uName = x;

    }

    show(name:INames):void {
        name.name;
        name.age;
        this.uName.name = 'Hello';
        this.uName.age = 11;
    }
    display():void{}
    view = function():void {}
    apperance = ():void =>{}
}


let ab:INames = {name:'Raju', age:10}
var user: User = new User(ab);



//in interface we can only declare properties and methods
//we can create constructor

abstract class UserA{
    abstract name: string;
    age: number;

    constructor(){
        this.age = 10;
    }
     show():void {
        console.log('abstract example');
     }
     abstract view():void ;
}








