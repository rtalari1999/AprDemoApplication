
/*
WHat is Abstract in Typescript?
================================

*/


// abstract is a keyword

// how, where and why to use abstract.

abstract class AParent {
   abstract fName: string;
    lName : string

    constructor(){
        //this.fName = 'john';
        this.lName = 'Dee';
    }

    display():void {
        console.log(this.fName + this.lName);
    }

    abstract show():any;
}
// Cannot create an instance of an abstract class.
//var aparent = new AParent();//invalid
//aparent.display();// invalid

class AChild extends AParent {
    override fName: string;
    constructor(){
        super();
        this.fName = ''
       
    }
    firstName(){
        console.log(this.fName)
    }
    override show() {
        
    }
}

var achild = new AChild();
achild.fName = ''
achild.display();

// 500sqft
//parking place for atleast 3 cars and two bikes 
//three bed rooms kitchen a big hall and 
//



abstract class Home {
    abstract numberofHall : number;
    abstract parkingPlace: boolean;

    abstract hall(): void;

    display(){
        console.log('abstract');
    }
}

class Builder extends Home {
     override numberofHall: number = 2;
     override parkingPlace: boolean = true;
     override hall(): void {
         console.log('please add blue voilet colors to hall');
     }

     show(){}
}
