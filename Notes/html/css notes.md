
What is CSS  and Why?
=========================================================

    - CSS stands for Cascading style sheets
    - CSS is a styling language used to add style to a webpage.
    - HTML provides structure and adds content to a webpage, while CSS enhances the visual presentation of that content through various styles.

How to write CSS ?
=============================================================

    Syntax to write css
    =====================
    selector { property:value}

    <h1>CSS COURSE</h1>

    <p>we are discussing introduction about css.</p>

    <a href="#"> NEXT IS TYPESCRIPT</a>


    CSS Rule

    h1 ===>>>>>> selector


    {}    ======>>>>>> declaration block

    selector {
        Property   value
        color    :    blue;   =======>>>>>>> declaration
        background-color : lightgray   =======>>>>>>> declaration
    }


    { color: blue }   ======>>>>>>   declaration block


How many ways we can include CSS in a webpage?
=================================================

        - There are three ways to add css in HTML
            1. Inline CSS  =======>>>>>> having highest priority
            2. Internal CSS  =======>>>>>> next highest priority
            3. External CSS =======>>>>>> having least priority

            1. Inline CSS: Styles added directly to the HTML element.
            2. Internal CSS: Styles defined at the head section of the document.
            3. External CSS: Styles defined in a separate file.

How many ways we can select the selectors
===========================================

    - CSS Selectors are used to select the HTML element that are to be styled by CSS.


        TYpes of selectors
        =====================

        There are the following different types of selectors in CSS.

            1. Element Selector ======>>>>>> Fourth highest priority
            2. Id Selector  ======>>>>>> First highest priority
            3. Class Selector ======>>>>>> third highest priority
            4. Universal Selector  =====>>>>> Least Priority
            5. Group selector
            6. attribute selector ======>>>>>> Second highest priority

    1. Element Selector
    ====================

        - The element selector selects HTML elements (p, div, h1, etc) and applies CSS to them. 
        - For example,
            h1 {
            color: red;
            }

            p {
                color: orange;
            }

        - In the above example, the element selector

        - h1 selects all h1 elements and styles their color to red
        - p selects all p elements and styles their color to orange

        - Note: The element selector is also referred to as a tag selector because it selects HTML elements based on their tag names.

        <h1>HTML Course</h1>  ====>>>> blue
        <h1>CSS Course</h1> ======>>>>>  blue
        <h1>TypeScript Course</h1> ======>>>>> blue
        <h1>Angular Course</h1>  ======>>>>>> blue



    2. id selector
    ==============

        - The id selector selects the HTML element with a unique identifier (id) and adds CSS to it.

        - The id selector is specified using the hash (#) character, followed by the id of the element.
        - Let's see an example,

        CSS
            #second-paragraph {
            color: red;
            }
        HTML
             <p id="second-paragraph">Second Paragraph</p>

        - #- id selector
        - second-paragraph- the name of the id
        - The id selector #second-paragraph selects the second paragraph and styles the text color to red.

        Note: The id selector is unique and selects one unique element.

        <h1 id="html">HTML Course</h1>  ====>>>> blue
        <h1>CSS Course</h1> ======>>>>>  gray
        <h1>TypeScript Course</h1> ======>>>>> yellow
        <h1>Angular Course</h1>  ======>>>>>> red

    3. class selector
    ====================
        - The class selector selects the HTML element using the class attribute and applies CSS to it.

        - The class selector is specified using the period (.) character, followed by the class name.

        - Let's see an example,
        HTML
             <p class="first-paragraph">This is the first paragraph.</p>
        CSS
            .first-paragraph {
            background-color: orange;
            }

        Here,

           - . - class selector
           - first-paragraph-name of the class
           - The class selector .first-paragraph selects all the paragraphs having the first-paragraph class name and styles background-color to orange.



        <h1 id="html">HTML Course</h1>  ====>>>> blue
        <h1>CSS Course</h1> ======>>>>>  blue
        <h1>TypeScript Course</h1> ======>>>>> yellow
        <h1>Angular Course</h1>  ======>>>>>> red

    4. Universal Selector
    ==========================
        - The universal selector selects every single HTML element on the page. 
        - It is written using the asterisk ( * ) character.

        Let's see an example,

        CSS
            * {
            color: red;
            }

        - In the above example, the universal selector * selects all the HTML elements and applies the red color.

        Note: The universal selector is also referred to as the wildcard selector.


    5. Group selector
    ========================

        - The group selector allows you to select multiple elements and apply the same style to all of them.

        - Let's see an example,
        HTML
            <h1>Heading</h1>
            <p>This is a paragraph.</p>
        CSS
            h1, p {
            color: blue;
            }

        - Here, the code applies CSS styling to all <h1> and <p> elements. 
        - Notice that we have used , to separate the HTML elements..

        <h1>Group selector</h1>    ======>>>>>> color blue, font-size 10px


        <p>This is all about group selector</p> ======>>>>>> color blue, font-size 10px


        <div>this will help in grouping different elements.</div> ======>>>>>> color blue, font-size 10px

    6. attribute selector
    ========================
       - The attribute selector selects elements based on specific attribute values.

       - The syntax for the attribute selector is:
        Element[attribute]

        - Let's see an example,
        HTML
            <p class="first">This is a first paragraph.</p>
            <p>This paragraph doesn't have a class attribute.</p>
            <p class="third">This is a third paragraph.</p>
            <p class="fourth">This is a fourth paragraph.</p>
        CSS
            p[class] {
            background-color: orange;
            }

            p[class="third"] {
                color: blue;
            }

        - In the above example, the attribute selector

        - p[class] selects all p elements having the class attribute and styles their background color to red.
        - p[class="third"] selects all p elements with the .third class name and styles their color to blue.

        Note: This selector only selects an element if a specified given attribute exists.

