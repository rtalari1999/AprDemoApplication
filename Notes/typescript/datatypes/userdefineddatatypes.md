ii. TypeScript has some user-defined data types
-------------------------------------------
Arrays, Tuples, Interfaces and Classes, Enum

i. User-defined data types also called as reference data types.
ii.

What is an Array Data Type(array) ?
---------------------------------
i.An array is a special type of data type which can store multiple values of different data types sequentially using a  special syntax.
ii. TypeScript supports arrays, similar to javascript.

There are two ways to declare an array.
--------------------------------------
1. Using Square brackets. this method is similar to  how you would declare arrays in javascript.

Example:
-------
let months: string[] = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

2. Using a generic array type, Array<elementType>

Example:
-------
let months: Array<string> = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

iii. Both methods produce same output.

iv. Of course you can always initialize an array like  shown below, but you will not get advantage of TypeScript`s type system.
Example:
--------
    let arr = [1, 'AA', true]

v. An array in typescript can contain  elements of different  data types using generic  array type syntax, as below
Example:
-------
    let values:(string | number)[] = ['AA', 123, 'BB', 456] ;
    //OR
    let values: Array<string | number> = ['AA', 123, 'BB', 456] ;

what is Tuple datatype(tuple) ?
-----------------------------
i.TypeScript introduced a new data type called Tuple. Tuple can contain  two values of different data types.

Example:
-------
    let employee:[number,string] = [ 1, 'Employee name'];
    let employee:Array<[number,string]>;
    let employee:[number,string][] = [[1,'Name'],[], []];

What is Enum DataType(enum) ?
---------------------------
i. Enum is nothing but Enumeration.
ii. Enum : Enumeration : data types : holds the set of constants.
iii. Enum or Enumeration  are a new data type supported in  typescript. most object-oriented programms like java and c# use enum. This is available in typescript too.

in simple words, enum allows us to declare  a set of named constants i.e. a collection of related values that can  be numeric or string  values.

There are three types of enums:
-------------------------------
1. Numeric enum
2. String enum
3. Heterogeneous enum

1. Numeric enum
---------------
numeric enums are  number-based enums i.e. they store string values as numbers.
    Example:
    enum PrintMedia {
        NewsPaper,//0
        NewsLetter,
        Magazine,
        Book
    }

    Note: Enum can be used as function parameter OR return type,
    function getMedia(mediaName:string): PrintMedia {
        if(mediaName === 'Forbs'){
            return PrintMedia.Book
        }
    }

ii. String enum ?
---------------
String enums also similar to numeric enums, except that enum values are initialized with string values rather than numeric values.

    Example:
    -------
    enum PrintMedia {
        NewsPaper ="NewsPaper",//0
        NewsLetter = 'N',
        Magazine = 'M',
        Book = 'Book'
    }

iii. Heterogeneous enum
Heterogeneous enums are enums that contain both string and number values
    Example:
    -------
    enum PrintMedia {
        NewsPaper ,//0
        NewsLetter = 'N',
        Magazine ,
        Book = 'Book'
    }





