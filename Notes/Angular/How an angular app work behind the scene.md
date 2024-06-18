How an angular app work behind the scenes - Angular flow
=========================================================

1) Angular.json file:
=======================

    - ANGULAR.JSON is the file which has various properties and configuration of angular project.
    - This is the file which is first reffered by the builder to look for all the paths and configurations.
    - and to check which is the main file.

2. MAIN.TS file:
================
    - This file acts as the entry point of the application.
    - This entry point is defined in the internals of webpack that is used by angular.
    - main.ts file helps in creating browser environment for the application to run
    - main.ts file calls the function bootstrapApplication(AppComponent).

3.  APP.COMPONENT.TS :
=========================
    - From the main.ts file above, we can clearly see that the main file asks to bootstrap the app component.
    - This is the component is in app.component.ts file.
    - This is the file which interacts with the html of the webpage and serves it with the data.

4. Index.html:
==============
    - Now, since angular is well aware of the components, styles, logic etc, which are required to display the page.
    - It's show time.
    - index.html file is called.
    - it is found in the src folder of the app.
    - compiler dynamically adds all the javascript files at the end of this file.
    - app-root calls the app.component.html file to view content. 

5. app.component.html file:
============================
    - This is the file which contains all the html elements and their binding which are to be displayed when the app loads.
    - Contents of this file are the first things to be displayed.

