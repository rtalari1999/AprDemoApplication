What is directive in angular?
===============================

    In Angular, directives are essential building blocks that enhance the power of HTML by adding new behavior or modifying existing behavior for elements in the template.


    templates === >>> DOM
    <h1>welcome directives in angular</h1>

    - Types of Directives in Angular
    =====================================
      Directive in angular can be categorized into the following types:

      1. Component Directive, 
      2. Structural Directive, and 
      3. Attribute directive.

    - Let’s consider each of these Angular Directive types separately.

     1. Component Directive
     =======================
        - Special directives in Angular are called Components since this type of 
          directive has a template or template URLs. In effect, it is a component directive that shows something in DOM.

     2. Structural Directive
     =========================
        - This type of directive is used to make changes in the layout of the DOM. 
          Elements can be added or removed, hence changing the structure of the DOM. An example would be *ngIf(adding or removing element from DOM) or *ngFor(lists elements of every iteration).

          ngIf, ngFor and ngSwitch

      3. Attribute directive
      ========================

        ngClass and ngStyle


        custom directives

        ng generate directive <directive-name>

        ng g d customAttribute


        in angular application we are going to add bootstrap framework



