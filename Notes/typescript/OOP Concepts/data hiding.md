What is Encapsulation(Data Hiding) in Typescript ?
==================================================
    - A class can controll the visibility of its data members to members of other classes.
    - Object oriented uses the concept of access modifiers to implement the concept of Encapsulation.
    The access modifiers define the visibility of a class's data members outside its defining class.


    Use of access modifiers:
    ========================
    - Access Modifiers increases the security of the class memebers and prevents them  from invalid use.

    Types of access modifiers:
    ===========================
        1. public
        2. protected
        3. private
        4. readonly

    class A {
        name: string;
        balance: number;
    }

    class B extends A{}

public :
=============
    - public variable or method can be accessed inside the class and outside the class.

protected:
==============
    - Protected variable or method can be accessed inside the class and subclass but outside the class and subclass is not possible to access.

private:
==========
    - private variable or method can be accessed within the class only but outside the class, subclass and outside subclass is not possible.
    - private properties are accessible within the same class only other than that is impossible.

readonly:
==========
    - readonly variable or method can be accessed within class, subclass, outside the class and outside the subclass but you can initialize readonly properties when you are declaring other than you can also initialize in constructor of same class.
