
//a = ['string', 123, true, undefined];
class ArrayClass {
    // this is the first approach to declare an array
    arr = [];
    arr1 = ['string', 123, true, undefined];
    arr2:string[] = ['jan', 'Feb']

    arr3:(string | number | boolean  )[] = ['jan','feb','mar', 1, 2, 3, 4, true];




    // another way of declaring arrays
    months: Array<string> = ['jan', 'Feb'];
    months1: Array<string | number> = ['jan','feb','mar', 1, 2, 3, 4]


    // tuples
    //tuple can contain two values of different data type

    tuple: [number, string] = [1, 'char'];
    tuple1: [number, string][] = [[1, 'jan'], [2, 'feb'], [3, 'mar'],[4, 'apr']];


    a: string = 'string';

    // class

}


class ClassA {
    fName: string = 'demo user';
    show(){}
}

class ClassB extends ClassA {
    lName: string = 'john';
    display(){}
}

var classb:ClassA = new ClassB();
classb.fName;
//classb.lName; // invalid
classb.show();
//classb.display();
