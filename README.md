Original Template
https://getbootstrap.com/docs/5.2/examples/album/
I chose this template as it was very minimal. I wanted a basic template which did not have multiple different pages and thousands of lines of code. This template allowed me to implement bootstrap components myself wihtout any boiler plate code.


Extra Components
The only feature I kept from the template was the NavBar. Everything else I changed or added myself. In this section I will list all features I implemented.

	Carousel
	The first feature I added was a carousel. This carousel uses a set interval to automatically slide to next picture. It features 3 different pictures of Lebron James.

	Circle Images
	I created 3 circle images, each with one of Lebrons greatest accomplishments. These 3 images are also fully responsive and will stack on top of eachother on a smaller screen.

	Striped Table
	I created a table with stripes to display data on Lebron James career statistics. This table also includes the use of JavaScript. When you click on a table heading it will sort the table according to the data in the corrosponding heading.

	Cards
	I created 4 cards on my website. Each card represents the teams which Lebron James has played for. Each card contains text and also an image which I have also made circular. These cards are fully responsive. On large screens all 4 cards are on 1 row. On medium screens this changes to 2 cards on 2 rows and on small screens the cards will be stacked one on top of eachother.

	Accordion
	I created an accordion to hold information about the 3 accomplishments previously mentioned in the 3 circle images. Each body of information will appear or dissapear when clicked

	Lists
	Inside 2 of the accordion bodies, i have implemented lists to display data in a list fashion.

	Embedded YouTube Video
	I have embedded a video from YouTube onto my website. This is also fully responsive.

	Jumbotron
	I have created 2 Jumbotrons at the bottom of the website. These Jumbotrons are side by side but aere fully responsive and stack on smaller screens. Each Jumbotron contains a button which will carry out different functionalities.

	Buttons
	This website has many buttons. For example both Jumbotrons have a button which when clicked will either show a sign up form or else open a modal.

	Off Canvas Form
	When the sign up button on the page is clicked an off canvas will appear. A off cancanvas is a sidebar component. Inside the off canvas includes a form which the user can fill out. This form also uses JavaScript to validate the inputs and will show error messages or a success message depending on the inputs. The form can then be closed by clicking off the off canvas or by clicking the X button on the top right.

	Various Inputs
	The sign up form contains various inputs such as a dropdown menu, color picker, file upload, range and a checkbox.

	Modal
	When the show more button is clicked this Modal opens and displays information about how the website was developed to the user. The modal can be closed by clicking the X on the top right or the close button at the bottom. This modal is also scrollable.


Additions to JavaScript
I have added 2 JavaScipt features to this website:

	Sort Striped Table
	The striped table can be sorted by the table headers. For example if the column header PPG is clicked, The table will sort the rows from smallest to biggest dynamically without refreshing. If clicked again it will sort the table by biggest to smallest. This works for all table headings.

	Sign Up Form Validation
	The sign up form is validated on submission. For example Regex is used to ensure that email used contains the @ symbol and ends with .com/.ie etc. If the validation finds any errors it will display them to the user. Once all inputs are valid the validator will display a success message to the user and the form is reset.


CSS
The CSS from the original template has been changed. The colors used on this website have been changed to a yellow and purple theme. These colors were chosen because they are the colors of the Los Angeles Lakers team which Lebron James currently plays for.


Effects
Afew extra effects have been added:

	Carousel
	The slides of the carousel will automatically switch.

	Hover Effects
	I have also changed the table headings to change font color and also change the cursor to a pointer to indicate that they are clickable.

	The 3 round circle images will also change effect when they are hovered over. Each image will get a purple border and also the opacity wil change to make the image slightly translucent.

	Off Canvas Open & Close
	When the off canvas is opened it has an effect which maked it appear to slide out from the right side of the screen.

	Modal Open & Close
	When the modal is opened and closed it appears to fade in and out.


Responsiveness
This website is fully responsive. It was tested using Google Chrome dev tools. Specifically the iPhone 12 pro, iPad Air screen sizes on Dev tools along with my MacBooks screen were used to analyze the responsiveness.


Why I Chose This Topic
I chose to create this website on Lebron James as he is my favourite basketball player. Lebron James is currently trending right now as he recently broke the NBA all time scoring record which was held by Kareem Abdul Jabbar for 39 years!


GitHub Repo
This code can be found on the following link:

https://github.com/JonathanHew/BootstrapProject