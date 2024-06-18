


Data Binding
=============
    - data binding is a way to synchronize the data between the model(.ts/ ts logic) and view(.html) components automatically.


view(.html) =========>>>>>> view
styles(.css)
logic(.ts)  =====>>>>>>>>> model


one way data binding 
    - Interpolation binding
    - Property binding
    - attribute binding ===>>>> applying custom class and styles

two way data binding
    ngModel

data binding
===================

One way data binding
    - .ts to .html
    - .html to .ts

   - component(.ts) to template(.html)
        1. interpolation
        2. Property binding
   - template(.html) to component(.ts)
        1. event binding

Two way data binding
    - ngModel


    .ts

    title = "angular"
    userName(){
        console.log(this.title)
    }

    .html 


What is data binding in angular?
=================================
    - Data binding in Angular is a fundamental concept that allows you to       
      synchronize data between your application’s model (the underlying data) and the view (what the user sees). 
    - It ensures that changes in the model automatically update the view, and vice  
      versa.

      There are two types of data bindings in angular.
      ================================================
        1. One-way data binding
        2. Two way data binding

    1. What is one-way data binding?
    ================================
        - In one way binding data flows from one direction. 
        - Either from view(.html) to component(.ts) or from component(.ts) to view(.
          html).

        - From Component to View
            - To bind data from component to view, we make use of 
               1. Interpolation & 
               2. Property Binding.

        1. Interpolation
        =================
            -  Interpolation allows us to include expressions as part of any string 
                literal, which we use in our HTML. The angular evaluates the expressions into a string and replaces it in the original string and updates the view. You can use interpolation wherever you use a string literal in the view

            - The Angular uses the {{ }} (double curly braces) in the template to   
              denote the interpolation. The syntax is as shown below

              Example
              ===========
                    <element> {{ templateExpression }} </element>

                - The content inside the double braces is called Template Expression
                - The Angular first evaluates the Template Expression and converts 
                  it into a string.
                - Then it replaces Template expression with the result in the 
                  original string in the HTML. Whenever the template expression changes, the Angular updates the original string again

    2. Property binding
    ====================
        - The Property binding allows us to bind HTML element property to a property 
          in the component. Whenever the value of the component changes, the Angular updates the element property in the View. You can set the properties such as class, href, src, textContent, etc using property binding. You can also use it to set the properties of custom components or directives (properties decorated with @Input).

        - The Property Binding uses the following Syntax

                [binding-target]=”binding-source”

        - The binding-target (or target property) is enclosed in a square bracket 
          []. It should match the name of the property of the enclosing element.


        - Binding-source is enclosed in quotes and we assign it to the 
          binding-target. The Binding source must be a template expression. It can be property in the component, method in component, a template reference variable or an expression containing all of them.


        - Whenever the value of Binding-source changes, the view is updated by the  
          Angular.

        - Example
        ===========
         app.component.html
 
            <h1 [innerText]="title"></h1>
            <h2>Example 1</h2>
            <button [disabled]="isDisabled">I am disabled</button>