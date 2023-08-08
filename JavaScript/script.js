// Menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show-menu");
});
// Slider
const slider = document.querySelector('.slider');
let imageIndex = 0;

function slideImages() {
    imageIndex = (imageIndex + 1) % slider.children.length;
    const translateXValue = `translateX(-${imageIndex * 100}%)`;
    slider.style.transform = translateXValue;
}

setInterval(slideImages, 5000); // Change slide every 5 seconds

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