console.log('Hello World!');
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





const toggleButton = document.getElementById('toggleSound');
  const bgSound = document.getElementById('bgSound');
bgSound.volume = '0.6';
  let isPlaying = false;

  const playIcon = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#00e6ff" fill="none">
             <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
             <path d="M12 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
             <path d="M9 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
             <path d="M6 11V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
             <path d="M15 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
             <path d="M18 11V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
           </svg>`;
  
  const muteIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27" color="none" fill="#00fdff">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M12 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6 11V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18 11V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
  
  toggleButton.addEventListener('click', () => {
    if (isPlaying) {
      bgSound.pause();
      icon.innerHTML = playIcon; // Play icon
    } else {
      bgSound.play();
      icon.innerHTML = muteIcon; // Mute icon
    }
    isPlaying = !isPlaying;
  });
  
  
  
  // Get the elements by ID
const extraContent = document.getElementById('extraContent');
const toggleButton2 = document.getElementById('toggleButton2');

// Add click event listener to the button
toggleButton2.addEventListener('click', function() {
  // Check if the extra content is currently hidden
  if (extraContent.classList.contains('hidden')) {
    // Show the extra content and update the button text
    extraContent.classList.remove('hidden');
    toggleButton2.textContent = 'Show Less';
  } else {
    // Hide the extra content and update the button text
    extraContent.classList.add('hidden');
    toggleButton2.textContent = 'Show More';
  }
});

toggleButton2.addEventListener('click', function() {
  if (extraContent.classList.contains('visible')) {
    extraContent.classList.remove('visible');
    toggleButton2.textContent = 'Show More';
  } else {
    extraContent.classList.add('visible');
    toggleButton2.textContent = 'Show Less';
  }
});






document.body.addEventListener('click', function() {
    document.querySelector('.containerp').classList.add('animate');
  });


// Select the overlay div
const overlay = document.querySelector('.overlay-text');

// Add an event listener to the body for the click event
document.body.addEventListener('click', function() {
  // Add the 'hide-overlay' class to the overlay when the body is clicked
  overlay.classList.add('hide-overlay');
  
  // Optionally, you can remove the div after the animation
  setTimeout(function() {
    overlay.style.display = 'none';
  }, 1000); // Match the timeout to the CSS animation duration
});
const preloader = document.querySelector('.containerp');
document.body.addEventListener('click', function() {
  setTimeout(function() {
    preloader.style.display = 'none';
  }, 1200); // 1200 milliseconds = 1.2 seconds
});