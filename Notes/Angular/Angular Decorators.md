Angular Decorators
====================

What are angular decorators?
============================
 - Decorators are the features of typescript and implemented as functions.
 - The name of the decorator starts with @ Symbol followed by brackets and arguments.
 - whenever you find something which is prefixed by @ symbol then you need to consider it as a decorator.
 - Decorators are going to be invoked at runtime.
 - decorators provides metadata to angular classes, properties, value, method, etc

 Types of Decorators in Angular:
 ==================================
 In Angular, The Decorators are classified into 4 types. They are as follows

    1. Class Decorators: 
        @Component and @NgModule
    2. Property Decorators:
        @Input and @Output(These two decorators are used inside a class)
    3. Method Decorators:
        @HostListener (This decora is used for methods inside a class like a click, mouse hover, etc.)
    4. Parameter Decorators: 
        @Inject(this decorator is used inside class constructor)

Note: In Angular, each decorator has a unique role.


    metadata

    empdetails
        emp name
        emp salary
        emp occ
        emp DOJ
        emp Skill set
