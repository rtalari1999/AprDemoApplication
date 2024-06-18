What are Angular components?
================================

 - A component is a smaller functionality in a large application.
 - component is a main building block of angular
 - component contains four files
    1.app.component.ts
    2.app.component.html
    3.app.component.spec.ts
    4.app.component.css

 - you can create number of components, there is no limit.
 - using components we can optimize code and we can reuse similar functionalities if required any other places.
 - using components we can avoid rebuilding same functionality.
 - atleast one component must be there.
 - in Angular, by default it provides a component called as appcomponent.

 How to create a custom component?
 ===============================
    - To generate custom components use below command in terminal
    command:
    ========
        ng generate component <component-name>
            ex: ng generate component header

        in shortcut, you can use command:
            ng g c header 

        - once component is created it will give you successful created component details.
        CREATE src/app/header/header.component.html (22 bytes)
        CREATE src/app/header/header.component.spec.ts (619 bytes)
        CREATE src/app/header/header.component.ts (246 bytes)
        CREATE src/app/header/header.component.css (0 bytes)



    Student Details (Web page)
    ==========================
    SProfile (functionality) ====>>>>>>>> big functionality

        - personal details(smaller functionality) ====>>>>> one component
            name, parents names, age, dob, blood group


        - address(small functionality) ====>>>>> one component
            address1, plot no, city, state, pincode

        - change password(smaller functionality) ====>>>>> one component
            current password, new password, confirm new password

        - update profile ====>>>>> one component

        - Request Certificates ====>>>>> one component

    SAcademics (functionality)
        - school name
        - subjects



        component
        personal details
        address
        change password

        lines of code increases
        - hard to read
        - hard fine issue


       - if you want use that component in any place you can simply call that component and utilize

       - So that you can optimize code and you will increase the performance of the application.

       - An anguluar class must be decorated with @Component decorator above the class of that component.
       - @Component decorator accepts object as a argument.

        There are many properties in object but we will discuss which are required.
            Properties of an object
            ==========================
                Standalone: if a component  standalone then it will not depend on any other components to load.

                imports:
                =======
                    - if you want to use any component, third-party libraries inside the current component then 
                      you have to import it's classes, modules inside import array of @component decorator of a class.
                
                Template:
                =========
                diffrent ways to create  Templates in angular
                - We can create a template in two ways. They are as follows
                    1. Inline template
                    2. External Template

                    1. Inline template:
                        In angular app, the inline templates are directly specified in the component decorator using "template" property.
                        - That means you have to write the required HTML inside the typescript file .

                    2. External Template:
                        - The External template define the HTML in a separate file and refer to that file using templateUrl Property of component decorator.
                        - here, the typescript file contains the path to that HTML file with the help of the  "templateUrl" property

                can we use template and templateUrl at a time in component decorator?
                ====================================================================
                    - we can not use both at a time. you can use only one type at a time.


                Note: Always it is recommended to use "templateUrl". It is a good practice.

                Style
                ========

                different ways to refer styling file

                 there are two ways to refer styling file. They are as below
                 1.Inline styles
                 2. External styles
                
                1.Inline styles:
                ================
                    - You can write your styles in same typescript file using styles property.

                2. External Styles:
                ==================
                    - The External styles define the styles in a separate file and refer to that file using "styleUrl" Property of component decorator.

                can we use styles and styleUrl at a time in component decorator?
                ====================================================================
                    - we can not use both at a time. you can use only one of them at a time.


                Note: Always it is recommended to use "styleUrl". It is a good practice.

            Selector:
            =========
                - it contains metadata of a component.
                - you can you these selector to view template in another component
                    Example:
                    =======
                        - first import component class inside imports array.
                        - use selector inside angle brakets as below
                            <app-root></app-root>







                Ngmodule: in previous version of an angular components are not a standalone So we will use ngModule concept
                    - import modules in import array in @ngModule decorator of a class
                    - import component inside declaration array of @ngModule decorator of a class


        component contains three blocks

            template
            metadata
            class




