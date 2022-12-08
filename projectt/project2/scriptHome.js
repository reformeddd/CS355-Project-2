const nav = document.querySelector('.nav');
const textEl = document.getElementById('text');
const text = "Welcome to Micycle Rent, the leading nationwide bike lender. Come ride with us today!"

const container = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');

const reviews = [
	{
		name: 'Ryan Neligan',
		photo:
		  './photos/profilePicture.jpg',
		review:
		  "Quality service. My partner and I ordered our rentals online ahead of time which made everything much more affordable.",
	},
	{
		name: 'Laura Armellino',
		photo:
		  './photos/profilePicture.jpg',
		review:
		  "Perfect service, very nice and helpful staff. Bikes were in excellent condition.",
	},
{
		name: 'Matt Mshar',
		photo:
		  './photos/profilePicture.jpg',
		review:
		  "Rented this bike for a Great price and had an enjoyable experience biking in Central Park. In addition great service!",
	},
{
	name: 'Anonymous',
		photo:
		  './photos/profilePicture.jpg',
		review:
		  "I rented a bike for the whole day and the bike was excellent!! I enjoyed the whole day, drove through whole Manhattan south and west. ",
	},
]

let testIdx = 0
let idx = 1
let speed = 100


window.addEventListener('scroll', fixNav)

writeText()

function writeText(){
	textEl.innerText = text.slice(0,idx);
	
	idx++;
	
	
	setTimeout(writeText, speed);
}


function fixNav() {
    if(window.scrollY > nav.offsetHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


function updateTestimonial(){
	const {name, photo, review} = reviews[testIdx]
	
	testimonial.innerHTML = review;
	userImage.src = photo;
	userName.innerHTML = name;
	
	testIdx++;
	
	if(testIdx > reviews.length-1){
		testIdx = 0
	}
}

setInterval(updateTestimonial, 10000)
