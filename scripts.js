const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Paths to your hamburger and close icons
const hamburgerIconPath = '/m2i8i8A0K9A0H7b1_0_-removebg-preview.png'; // Ensure this path is correct
const closeIconPath = '/01fe6447fbd35f56bf5b36ce07e7fabb-removebg-preview.png'; // Ensure this path is correct

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Change icon based on menu visibility
    if (navLinks.classList.contains('show')) {
        hamburger.src = '01fe6447fbd35f56bf5b36ce07e7fabb-removebg-preview.png'; // Change to close icon
    } else {
        hamburger.src = '/m2i8i8A0K9A0H7b1_0_-removebg-preview.png ';
    }
});
hamburger.style.width = '46px';
hamburger.style.height = '30px';

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('overlay');
    const company1 = document.getElementById('company1');
    const content = document.getElementById('content');

    // Show the first company name
    setTimeout(() => {
        company1.classList.add('show');
    }, 100); // Slight delay to ensure transition

    // Show the second company name after the first one
    setTimeout(() => {
        company1.classList.remove('show');
    }, 3000); // 3 seconds after the first company name

    // Hide the overlay and show the actual content
    setTimeout(() => {
        overlay.style.display = 'none';
        content.style.display = 'block';
    }, 6000); // 3 seconds after the second company name
});




document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    const icon = document.getElementById('icon');
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        icon.src = '/daymode-nightmode-switch-button-light-dark-theme_399089-668_3-removebg-preview.png';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        icon.src = '/daymode-nightmode-switch-button-light-dark-theme_399089-668_1-removebg-preview.png';
    }
});






//custom js for theme


document.getElementById("icon").addEventListener("click", function() {
    const sideLine = document.querySelector(".side_line");
    const currentColor = window.getComputedStyle(sideLine).backgroundColor;
    if (currentColor === 'rgb(0, 0, 0)') { // Checks if the color is black
        sideLine.style.backgroundColor = '#04d9ff'; // Change to neon green
     
    } else {
        sideLine.style.backgroundColor = 'black'; // Change back to black
    }
});



//for company name

const name = document.getElementById('company_name');
const icon = document.getElementById("icon");
if (icon && name) {
    icon.addEventListener("click", function() {
        const computedColor = window.getComputedStyle(name).color;
        if (computedColor === 'rgb(255, 255, 255)') { // white
            name.style.color = '#04d9ff'; // neon green
        } else {
            name.style.color = 'white'; // change to white
        }
    });
} else {
    console.error('Element with ID "icon" or "company_name" not found.');
}