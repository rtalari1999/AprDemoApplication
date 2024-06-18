<!DOCTYPE html>
<html>
    <head>
        <title>Introduction</title>
    </head>
    <body>
<!-- Main Headings  h1 ..... h6 -->
        <h1>HTML Course!</h1>
        <h2>HTML Course</h2>
        <h3>HTML Course</h3>
        <h4>HTML Course</h4>
        <h5>HTML Course</h5>
        <h6>HTML Course!</h6>

<!-- Paragraph Example-->
    <p> Maintained by a dedicated team at Google,
                Angular provides a broad suite of tools,
    APIs, and libraries to simplify and
    streamline your development workflow.
    Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your
    team and the size of your codebase.</p>


<!-- Table Example-->
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Harry</td>
                <td>10</td>
                <td>Ind</td>
            </tr>
            <tr>
                <td>Harry</td>
                <td>10</td>
                <td>Ind</td>
            </tr>
            <tr>
                <td>Harry</td>
                <td>10</td>
                <td>Ind</td>
            </tr>
            <tr>
                <td>Demo</td>
                <td>11</td>
                <td>USA</td>
            </tr>
        </tbody>
    </table>
    
<!-- List-->

    <!-- Unordered List-->
        <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>Mango</li>
        </ul>

        <!-- Ordered List-->

        <ol>
            <li>Apple</li>
            <li>Orange</li>
            <li>Mango</li>
        </ol>

        <!-- Description List-->

        <dl>
            <dt>HTML</dt>
            <dd> - Hyper text markup language</dd>
            <dd> - Hyper text markup language</dd>
            <dt>CSS</dt>
            <dd> - Hyper text markup language</dd>
            <dd> - Hyper text markup language</dd>
            <dt>TypeScript</dt>
            <dd> - Hyper text markup language</dd>
            <dd> - Hyper text markup language</dd>
        </dl>
 <!-- Break Example-->
 HTML Line Break:
 ===================
        - The HTML Line break tag is used to apply a line break and start your text in the new line.
        - <br>
        - you can find there is no closing tag for <br> tag because this tag is an empty tag.
        - which does not require a closing tag
        Summer is the best season.<br> Winter is the best season

<!-- Horizontal Line <hr> -->

        <hr>

        HTML Horizontal Line:
        =====================
            - The HTML Horizontal rule tag <hr>  is used to insert a horizontal line between our paragraphs or etc..,
            - The <hr> tag is an empty tag, i.e it does not require a closing tag.


<!-- Preformatted text Example <pre> -->

    HTML Preformatted text tag:
    ===========================
        - The HTML Performatted text tag, <pre>, is used to define a block of text to display them in the same manner as it is written in the HTML file.
        - The <pre> tag preserves all new lines and white spaces.


<pre>This text will 
    be displayed exactly 
        as it is written</pre>

<!-- Inline and Block Elements Example  -->

<h1 style="background-color: red;">Block Elements</h1>
<span style="background-color: blue;color: #fff;">Inline Element</span><span style="background-color: green;color: #fff;">Inline Element</span>


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


    <!-- SuperScript -->

            <p>This is a <sup>SuperScript</sup> text.</p>
            <p> a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>

<!-- SubScript -->

            <p> H<sub>2</sub>O</p>

<!--  Difference between span and div tags-->

            <div style="background-color: red;">This text is inserted in div tag.</div>
            <div style="background-color: red;">This text is inserted in div tag.</div>

  <!-- span -->          
            <span >This </span>
            <span>This text is inserted in span tag.</span>

            <p> This is an <span style="color: yellow;">example</span> of <span>span</span> tag.</p>


<!-- HTML Formatting text Example -->

            <p>This is an <i>italic</i></p>
            <p>This is an <u>italic</u></p>

            <del>Delete</del>
            <mark>Mark</mark>
            <ins>inserting text</ins>


            

    </body>
</html>