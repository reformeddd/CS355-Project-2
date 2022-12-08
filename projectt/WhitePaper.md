# Concept / Business Model of Micycle (my website)

## Summary 

- Micycle is a website users can visit to rent out professional-grade bikes for certain days at a time. If someone really  liked the bike they were renting, they have the option to purchase this bike for a price that is lowered depending on how long they rented it out for. So far, the company only offers a small, limited supply of bikes, but will increase their supply and range as the company grows.


### Homepage

- When loaded onto the Micycle website, the user is greeted with the homepage. This homepage acts as a "hub" for the user, where they can traverse to every part of the website.

- The user can scroll down the page and see reviews of past customers of the service, where they can hopefully be more inclined to rent / purchase the bikes that are offered.


### About

- This page can be accessed by clicking the **About** button on the navigation bar, and just contains basic information about the company if the customer was interested in knowing.

- Although it was not required, **Section 13: Day 12 - FAQ Collapse** was used for this portion of the website to simply organize small pieces of information that are easily digestible by the user.


### Services

- This page can be accessed by clicking the **Services** button of the navigation bar, and contains all of the bikes a user is able to rent / purchase. 

- There is no cart functionality found on this page, however, the user is able to hover over the pictures and receive more information about the bike they put their mouse over.


### Contact

- This page can be accessed by clicking the **Contact** button on the navigation bar, and contains a submit box that a user is able to fill out if they had any additional questions / concerns for Micycle.

- It is able to recognize certain user input, where it looks for proper email addresses and if every box was filled in. To send this message to the user, it implements **Section 28: Day 27 - Toast Notification** from the UDemy course.



## Code Highlights


### 1. Node File


```js
const path = require('path');
const express = require('express');

const app = express();

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/project2/homepage.html'));
});

app.get('contact', function(req,res){
	res.sendFile(path.join(__dirname + '/project2/contact.html'));
});

app.use(express.static(__dirname + '/project2/'));
app.listen(3000);

console.log("Running at Port 3000");
```


- This is the code snippet for my node.js file, which is called **app.js**, and I use express.js to get and send the file onto the localhost.

- Quickly looking through it, **app.js** essentially hosts my website locally on **localhost:3000**.

- One major issue that I occurred with implementing node into my project was actually getting the css and js files to show up on the localhost. I solved this issue by moving the every file other than app.js into a new folder called **project2** and using **app.use(express.static(__dirname + '/project2/'));** to use the entire folder in the loading of my localhost.



### 2. Saving User Input to a File


```js 
let saveToFile = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('text');

	if(name.value == null || name.value == "", email.value == null || email.value == "", message.value == null || message.value == ""){
		createNotification(message1);
	}
	else{
		if(validateEmail(email.value)===false){
			createNotification(message2);
		}
		else{	
			let info =
				'Name: ' + name.value + ' \r\n ' +
				'Email: ' + email.value + ' \r\n ' +
				'Message: ' + message.value;

			const blob = new Blob([info], { type: 'text/plain' });
			const newFileName = 'contactInformation.txt';

			let downloadLink = document.createElement("a");
			downloadLink.download = newFileName;

			if (window.webkitURL != null) {
				downloadLink.href = window.webkitURL.createObjectURL(blob);
			}
			else {
				downloadLink.href = window.URL.createObjectURL(blob);
				downloadLinkLink.style.display = "none";
				document.body.appendChild(downloadLink);
			}

			downloadLink.click();
		}
	}
}
```


- This is a code snippet of the **saveToFile** function, which is found in the **scriptContact.js** file.

- The goal of this was to receive the information the user inputs in the contact boxes in a downloadable file. 

- It first goes through a couple of if statements to see whether the user filled in all of the blanks, as well as if they typed in a valid email address.

- Then a blob is created to store the inputted information and released as a new file.

- The main problem I occurred with this implementation was attempting the usage of a database first. I couldn't figure out how to use a database to store inputted information in time so I instead went for a simpler approach in just outputting the information to a separate file.



### 3. Email Regular Expression


```js

function validateEmail(input) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(input);
}
```

- This is a code snippet of the **validateEmail** function, which is found in the **scriptContact.js** file.

- It allows for the previously mentioned function, **saveToFile**, to properly identify an inputted email address.

- The biggest challenge was creating the regular expression for a valid email, however after looking at a couple of reference websites, this was the best I created to my ability.



### 4. Video Background


<div class="video">
	<h1 id="text"> Test</h1>
	<div class="video-container">
		<div class="container-color">
			<video autoplay muted loop class="bikeVideo">
				<source src="bikeVideo.mp4" type="video/mp4">
			</video>
		</div>
	</div>	
</div>


- This is a code snippet of the **video** html skeleton, which is found in the **homepage.html** file.

- It allows for the user to view a video playing in the background of the homepage, which is of an individual riding a bike.

- This necessarily wasnn't a difficult addition into the page, however, upon first implementation, there were performance issues with the website due to the video playing. To fix this problem, I was playing around in the css file to see if I can change anything, and to my surprise, moving the video back an index and changing the opacity allowed for the page to run much smoother.



### 5. Hidden Information Hover

```css
.overlay {
    position: relative;
    width: 480px;
    height: 360px;
}
.overlay .hovered {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    color: #FFF;
	border-radius: 10px;
}
.overlay:hover .hovered {
    display: block;
    background: rgba(0, 0, 0, .6);
}

.overlay > .hovered{
	transform: translateY(20px);
	transition: transform 0.25s;
}

.overlay:hover> .hovered{
	transform: translateY(0);
}
```


- This is a code snippet of the **overlay** for the bike photos, which is found in the **styleServices.css** file.

- It allows for the user to get information that is not normally seen on the page while looking at it first glance; by hovering their mouse over the image, the user is introduced to more information about the product they want.

- One of the biggest issues when implementing the overlay came from the bike images, not the overlay itself, due to the pictures not scaling down properly. To solve this, I just replaced all the pictures with new ones so that they properly scale and fit into the overlay.



## Udemy Implementation

- Section 13: Day 12 - FAQ Collapse

- Section 21: Day 20 - Button Ripple Effect

- Section 26: Day 25 - Sticky Navbar

- Section 28: Day 27 - Toast Notification

- Section 31: Day 30 - Auto Text Effect

- Section 48: Day 47 - Testimonial Box Switcher