// Get the toggle button element
const toggleButton = document.querySelector('.toggle-button');

// Get the navigation list element
const navList = document.querySelector('.nav__list');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation list
  navList.classList.toggle('active');
});


// Get the toggle button element
const toggleButton = document.querySelector('.toggle-button');

// Get the navigation list element
const navList = document.querySelector('.nav__list');

// Add event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the 'active' class on the navigation list
  navList.classList.toggle('active');
});