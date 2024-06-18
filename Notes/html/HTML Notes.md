
#What is HTML ?
====================
    - HTML stands for hyper text markup language.
    - HTML is the standard markup language for creating web pages.
    - HTML describes the structure of a web page.
    - HTML consists of a series of elements
    - tells the browser how to display content.
    - HTML elements are hiearchical which means that they can be nested inside each other to create a tree-like structure of the conent on the web page.
    - This hierarchical structure is called the DOM(Document object model) and it is used by the browser to render the web page.


    simple html structure is like below:
    =====================================

        <!DOCTYPE html>
        <html>
            <head>
                <title>Introduction</title>
            </head>
            <body>
                <h1>HTML Course</h1>
            </body>
        </html>

        !DOCTYPE html :
        ===============
            - The !DOCTYPE html declaration defines that this document is an html document.
            - If you see a document with <!DOCTYPE html> then this page is written in HTML5

        html tag:
        ==========
            - root element of an html page.
            - all other elements must be written inside this html open and closing tag.
            - HTML element contains two child elements HEAD and BODY tags.

        head tag:
        ============
            - This head element contains title of a web page.
            - also, contains invisible elements such as any linked css or javascript files.

        title tag:
        ===========
            - this tag contains title of a web page.
            - we can find this at the top of the  browser that is at browser tab.
                <title>Introduction</title>

        body tag:
        =========
            - this element contains the main content of the web page.
            - which will be displayed in the web browser's window.

        headings:
        =======

        - the html heading tags (<h1> to <h6>) are used to add headings to a webpage.
        - These headings created varying sizes and importance.
        - its sizes of heading tags come from the browser's default styling.
        - h1 tag  is the most important heading in a webpage.
        - h6 tag is the least important heading in a webpage.

        HTML Comments:
        ==============
        - HTML comments are used to insert notes to a web page
        - in HTML comments starts with <!--  and ends with -->
        - HTML comments are not displayed by browser. they are used to add notes for documentation purposes within code.

        HTML Paragraphs:
        ================
            - HTML <p> tag is used to create paragraphs.
            - HTML Paragraphs always starts on a new line.
            - it will remove all the rxtra spaces between words.
            - it will also remove extra lines between sentences.

        HTML Table:
                - The HTML table (<table>) is used to represent data in a structured way by creating a table.
                    Table ROW (<tr>) in HTML:
                        ======================
                            - The <tr> tag is used to define a row in a table.
                            - table row can includes either table heading, <th></th> ot table data, <td></td>.
                            - you can insert number of rows.

                    Table header:
                    =============
                                - it is used to define table header.
                                - it is generally at the top of your table.
                                -  Syntax is <th></th>

                    Table cell<td> in HTML:
                        ==================
                            - The <td> tag is used to define table cells(data). 
                            -  The table cells store data to be displayed in the table.

                    table thead and tbody tags:
                    ==============================

                    - inside thead wil insert headers of table and inside tbody will insert table data.

        HTML List tag
        =============
            - HTML lists are used to display related information in an easy-to-read and concise way as lists.

             - We can use three types of lists to represent different types of data in HTML.
                    1. Unordered List <ul></ul>
                    2. Ordered List <ol></ol>
                    3. Description List <dl></dl>


         HTML Horizontal Line:
        =====================
            - The HTML Horizontal rule tag <hr>  is used to insert a horizontal line between our paragraphs or etc..,
            - The <hr> tag is an empty tag, i.e it does not require a closing tag.
                        
         HTML Preformatted text tag:
         ===========================
             - The HTML Performatted text tag, <pre>, is used to define a block of text to display them in the same manner as it is written in the HTML file.
             - The <pre> tag preserves all new lines and white spaces.
                    
 What are HTML Attributes?
=========================
        - HTML elements can have attributes, which provide additional   information about the element.
        - They are specified in the opening tag of the element.
        - and takes the form of name-value pair
                 <img src="image.jpg">

                    - src is the attribute name and image.jpg is the attribute value.
                    - attribute name and attribute values are separated by an equals sign.

                    NOte : attributes are mostly optional

HTML Inline Elements:
======================
    - Inline elements are displayed on the same line.
    - They do not start on a new line and take  up only as much width as their contents require.
    - if we have multiple span tags , they get placed on the same line.

    Listing inline elements
    =======================
        <a></a>
        <input>
        <span></span>
        <img>
        <b></b>
        <strong></strong>

HTML Block Elements:
====================
    - Block elements take up the whole horizontal space available on its container.
    - they start on a new line and take up as much as their contents require.
    - if we have multiple block elements, they will each take a separate line.

    Examples for block elements
    =============================

        <div></div>
        <h1>..... <h6>
        <p></p>
        <table></table>



<!-- links Example -->
HTML Links:
=============
            - HTML links or hyperlinks connect one resource on the web to another.
            - redirecting from one page to another page.
            - URL - The destination of the link.
            - TEXT - the part that will be visble as a link. 
            - href - is the attribute name where we can have reference to another resource.
            <a href="https://angular.dev/overview">
                <img src="https://th.bing.com/th?q=Angular+Logo.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247">
            </a>


<!-- Images Example -->
HTML Image:
============
            - The HTML <img> tag embadeds an image within the HTML web page.
            - Img tag is an empty tag so it does not require a closing tag.
            - src -  required attribute for the img tag. it specifies the path(URL) to the image.
                  - it tells the browser where to look for the image.

<img src="https://th.bing.com/th?q=Angular+Logo.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="ANGULAR LOGO">

<!-- Bold example -->
            <b> This text is bold.</b> <br>
            <strong>This text is strong.</strong>

<!-- SuperScript and subscript example -->

            <p>This is a <sup>SuperScript</sup> text.</p>
            <p> a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>

            <p> H<sub>2</sub>O</p>


HTML Form:
===========
    - An HTML Form is a section of the document that collects input from the user. 
    - The input from the user is generally sent to a server (Web servers, Mail clients, etc). 
    - We use the HTML <form> element to create forms in HTML.

    - HTML Form Elements
    ====================
        - HTML form elements are used to store user input.
        - A form contains special interactive elements that users use to send the input. 
        - They are text inputs, textarea fields, checkboxes, dropdowns, and much more. For example,
        - There are various HTML form elements for various input types. The form elements available in HTML5 are as follows:

            HTML <input> tag
            HTML <label> tag
            HTML <button> tag
            HTML <select>, <option> and <optgroup> tags
            HTML <textarea> tag
            HTML <fieldset> tag
            HTML <legend> tag

        - HTML <input> tag
        ===================
            - The HTML <input> tag defines the field where the user can enter data. For example,
                <input type="text" name="firstname">
                - type - determines the type of input the <input> tag takes
                - name - specifies the name of the input

        - HTML <label> tag
        ====================
            - The HTML label tag is used to create a caption for a form element. 
            - The text inside the <label> tag is shown to the user.
                <label for="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname">

            - The for attribute is used to associate a label with the form element. 
            - The value for the for attribute is set as the id of the form element which is firstname in the above example.


        - HTML Input Tag:
        ==================
            - The HTML <input> tag defines the field where the user can enter data. 
            - The type attribute determines what type of user input is taken.
                Here,
                <input type="text" name="firstname">
                type - determines the type of input the <input> tag takes
                name - specifies the name of the input which is what the data is named as when submitting the data to a server.


                Different Input Types:
                =========================
                    - The various types of input tags available in HTML5 are:

                        1.text - creates a single-line text fields (default)
                        2.button - creates a button with no default functionality
                        3.checkbox - creates a checkbox
                        4.color - creates a color picker
                        5.date - creates a date picker
                        6.datetime-local - creates a date and time picker
                        7.email - creates an input field that allows the user to input a valid email address
                        8.file - creates an input field that lets the user upload a file or multiple files
                        9.hidden - creates an invisible input field
                        10.image - creates a button using an image
                        11.month - creates an input field that lets the user enter month and year
                        12.password - creates an input field that lets the user enter information securely
                        13.radio - creates a radio button
                        14.range - creates a range picker from which the user can select the value
                        15.reset - creates the button which clears all the form values to their default value
                        16.search - allows user to enter their search queries in the text fields
                        17.submit - allows user to submit form to the server
                        18.tel - defines the field to enter a telephone number
                        19. time - creates an input field that accepts time value
                        20.url - lets the user enter and edit a URL
                        21.week - lets the user pick a week and a year from a calendar


                - input Type checkbox
                ======================
                - The input type checkbox is used to create a checkbox input. For example,
                <input type="checkbox" id="subscribe" value="subscribe">
                <label for="subscribe">Subscribe to newsletter!</label><br>

                - The value of the checkbox is included in the form data only if the checkbox is selected and is omitted if the checkbox is not selected.

        - HTML <select>, <option> and <optgroup> tags
        ================================================
            - The HTML <select> tag is used to create a menu of options. 
            - Each of the options is represented by the <option> tag. For example,
                    <label for="pets">Pets:</label>
                    <select id="pets">
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>

        - HTML <textarea> tag:
        =======================
            - The HTML <textarea> tag is used to define a customizable multiline text input field. For example,
            <textarea rows="10" cols="30"> Type something…</textarea>
            - Here, the rows and cols attributes represent the rows and columns of the text field.


