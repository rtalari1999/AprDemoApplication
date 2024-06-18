Folder Structure of angular Application
========================================

node_modules Folder:
===================
    - this folder contains the packages(folder of the packages) which are installed into your application when you created a project in angular.
    - if you install any third-party packages then also their folders are going to  be stored inside node_modules folder.
    - Like bootstrap, jquery, angular material folders also created in this node_modules folder.
    - The important point that you need to remember is, you should not include this folder while deploying your application into production server or commiting to the git repository.
    - if you are moving this folder from one location to another new location simply do not include this node_modules folder.

src Folder:
===============
    - This is the source folder of our angular application.
    - That means this is the place where we need to put all our application source code.
    - By default the angular framework creates lots of files folders within the src folder.

    app Folder:
    ============
        - Thsi is the application folder whenever you want to create any component, services etc you need to create it within this app folder.

        app.component.css file:
        =========================
        - This file  contains styles of a component.

        app.component.html file:
        ========================
        - content could be inserted inside the HTML elements to view.

        app.component.spec.ts file:
        ==============================
        - This file is used for unit testing of your component.

        app.component.ts file:
        ========================
        - This file contains typescript code.
        - this file contains business logic of your component.
        app.config.ts file:
        ===================
        - any related configurations of this app folder we will include inside this file.

        app.routes.ts file:
        ====================
        - we will handle routing things in this file.

    assets folder:
    ===================
    This is the folder where you can store the static assets like images, icons, etc.

    favicon.ico:
    ==================
        - it is the icon file that displays on the browser.
    index.html:
    ==========
    - This HTML file contains HTML code with head and body section.
    - it is the starting point of your application or you can say that this is where our angular app bootstraps.
    - if you open it you will find that there are no references to any CSS nor JS files this is because all dependencies are injected during the build process.

    main.ts:
    ===========
    -   This is the entry point for our angular application.
    - if you ever work with programming lang like java or c , c# then you can compare this with main() method of such application.
    style.css:
    ==========
    - You can add global styles to this file.

    .editorConfig file:
    ===================
    - This file is basically used to set up the team environment in real-time, many developers may work on a single project.
    - to declare codeing standards like variables, classes, styles, size of each character etc. 
    - while commiting to git you can ignore.

    .gitignore file:
    ================
     - the file which you want to ignore in the git repository, you need to put within this ignore file.

     angular.json file:
     ===================
     - it contains all the configurations of your angular project.
     - This is the most important files.
     - it contains the configurations such as what is the project name, what is the starting point of your angular app(index.html file).
     - what is the entry point of typescript(main.ts file).

     package-lock.json file:
     ========================
     The package-lock.json is automatically generated for those operations where npm modifies either the node_modules tree or package.json.
     - all the node_modules packages versions/ details we will find in this file.
     - you are not touching anything inside this file.

     package.json file:
     ====================
     - it contains basic information regarding the project (name, description, license, etc)
     - We can have scripts, dependemcies and devdependencies
     - dependencies are required during developement time as well as work application correctly in browser or any where.
     - deDependencies are required during development stage.

     README.md file:
     ================
     - README is the file that contains the description or description of the project.
     - this file contains the basic  documentation for your project, also it contains some pre-filled CLI command information.
     - which we would like to give to the end-users so that they can start using our application in a great manner.

     tsconfig.app.json file:
     =======================
        - This file is used during the compilation of your application and it contains the configuration information about how your application should be compiled.
    tsconfig.json file:
    ====================
    - This file contains the configurations for typescripts.
    - if  there is a tsconfig file in a directory , that means that the directory is a root directory of a typescript project.
    -  it is also used to define different typescript compilation related options.

    .spec :
    - if you find any file with .spec extention then you have to understand it is a testing file.

    tsconfig.spec.json file:
    ========================
    - This file is used for testing purposes in the node.js environment.
    - it also helps in maintaining the details for testing.

    e2e Folder :
    ===============
    - e2e stands for end-to-end testing.
    - it is used for testing the user behavior when it is deployed on the production server.
    - it will monitor who visits your app, log in to app, time spent in your app.
