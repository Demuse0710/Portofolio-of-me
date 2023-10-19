// Menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show-menu");
});
// Slider
var img = document.getElementById('img');

var slides = ['assets/doge.jpg', 'assets/ImageBg3.jpg', 'assets/Background.png'];

var Start=0;

/* Slider Function */ 
function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,10000) /* Set time 10.0 sec for slide*/

// /* Slider Animation */
// const slides = document.querySelectorAll('.slider img');

// slides.forEach((slides, index) => {
//  slides.style.animation = `slideAnimation 5s linear infinite ${index}s`;
// });

// const slides = document.querySelectorAll('.slider img');

// slides.forEach((slides, index) => {
//  slides.style.animation = `slideAnimation 5s linear infinite ${index}s`;
// });

// Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    if (email.trim() === '' || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message.trim() === '') {
        alert('Please enter your message.');
        return;
    }

    // If all validations pass, you can proceed with form submission
    // For demonstration purposes, we'll simply log the data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form fields after submission
    contactForm.reset();
});

function isValidEmail(email) {
    // You can implement a regular expression or use a validation library
    // For simplicity, we'll use a basic check for demonstration purposes
    return email.includes('@') && email.includes('.');
}