const toasts = document.getElementById('toast')

const message1 ='Please enter all information into the fields.'
const message2 ='Please enter a valid email.';

const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})

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

function validateEmail(input) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(input);
}


function createNotification(input) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
	
    notif.innerText = input

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

