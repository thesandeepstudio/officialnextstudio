// Select elements
const modal = document.getElementById('modal');
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const getStartedButton = document.getElementById('getStartedButton');
const contactModal = document.getElementById('contactModal');
const closeButton = document.querySelector('.close-button');

// Toggle the navigation menu
hamburger.addEventListener('click', () => {
    const isVisible = navLinks.classList.toggle('active');

    // Prevent horizontal scrolling when the menu is open
    if (isVisible) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
        document.body.style.position = 'fixed'; // Keep the body in place
        document.body.style.width = '100%'; // Maintain full width
    } else {
        resetBodyStyle();
    }
});

// Close the navigation menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (navLinks.classList.contains('active') && !event.target.closest('.hamburger-menu') && !event.target.closest('.nav-links')) {
        navLinks.classList.remove('active'); // Remove the active class
        resetBodyStyle();
    }
});

// Smooth scroll to section when a nav link is clicked
navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        const targetId = event.target.getAttribute('href'); // Get the href attribute of the clicked link
        const targetElement = document.querySelector(targetId); // Select the target element based on href

        if (targetElement) {
            event.preventDefault(); // Prevent default anchor behavior
            navLinks.classList.remove('active'); // Close the menu
            resetBodyStyle();
            
            // Scroll to the target element smoothly
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Show the contact modal when the Get Started button is clicked
getStartedButton.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

// Close the contact modal when the close button is clicked
closeButton.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

// Close the contact modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// Handle form submission for the contact form (optional)
document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Log values (you can send these to your server)
    console.log({ name, email, phone, message });

    // Close the modal after submission
    contactModal.style.display = 'none';

    // Clear the form (optional)
    document.getElementById('contactForm').reset();
});

// When the user clicks on a gallery item, open the modal
document.addEventListener('click', event => {
    const galleryItem = event.target.closest('.gallery-item');
    if (galleryItem) {
        const details = galleryItem.getAttribute('data-details');
        document.getElementById('modal-details').innerHTML = getDetailsContent(details);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent body scrolling
    }
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable body scrolling
    }
});

// Function to reset body styles
function resetBodyStyle() {
    document.body.style.overflow = ''; // Re-enable scrolling
    document.body.style.position = ''; // Reset to default position
    document.body.style.width = ''; // Reset to default width
}