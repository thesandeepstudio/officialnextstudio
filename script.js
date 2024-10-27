// Select elements
const modal = document.getElementById('modal');
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const contactModal = document.getElementById('contactModal');
const closeButton = document.querySelector('.close-button');
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Toggle the navigation menu
hamburger.addEventListener('click', () => {
    const isVisible = navLinks.classList.toggle('active');
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
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
        }
    }
});

// Ensure the modal behavior is specific to plans.html
if (window.location.pathname.includes('plans.html')) {
    // Select all 'Get Started' buttons on plans.html
    const getStartedButtons = document.querySelectorAll('.get-started-button');

    // Add event listeners to each button to show the contact modal
    getStartedButtons.forEach(button => {
        button.addEventListener('click', () => {
            contactModal.style.display = 'block'; // Show the modal on button click
        });
    });

}

// Handle form submission for the contact form
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve values from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Log values (you can send these to your server)
        console.log({ name, email, message });

        // Log to check if the function is executed
        console.log('Form submitted. Displaying success message.');

        // Display the success message
        successMessage.style.display = 'block'; // Show the success message

        // Clear the form
        contactForm.reset();
    });
}


// Handle gallery item clicks to open a separate modal
document.addEventListener('click', event => {
    const galleryItem = event.target.closest('.gallery-item');
    if (galleryItem) {
        const details = galleryItem.getAttribute('data-details');
        document.getElementById('modal-details').innerHTML = getDetailsContent(details);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent body scrolling
    }
});

// Close the gallery modal when clicking anywhere outside of it
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

// Functions for opening and closing image modals (if needed)
function showDetails(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function hideDetails(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
