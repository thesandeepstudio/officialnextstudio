// Select elements
const modal = document.getElementById('modal');
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle the navigation menu
hamburger.addEventListener('click', () => {
    const isVisible = navLinks.classList.toggle('active');

    // Prevent horizontal scrolling when the menu is open
    if (isVisible) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
        document.body.style.position = 'fixed'; // Keep the body in place
        document.body.style.width = '100%'; // Maintain full width
    } else {
        document.body.style.overflow = ''; // Re-enable scrolling
        document.body.style.position = ''; // Reset to default position
        document.body.style.width = ''; // Reset to default width
    }
});

// When the user clicks on a gallery item, open the modal
document.addEventListener('click', event => {
    if (event.target.closest('.gallery-item')) {
        const details = event.target.closest('.gallery-item').getAttribute('data-details');
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

// Function to get the details content based on the data-details attribute
function getDetailsContent(details) {
    switch(details) {
        case 'details1':
            return `
                <h2>Drool Nepal</h2>
                <img src="Image/img/sample1.png" alt="Sample Image 1">
                <p>Project details for Drool Nepal...</p>
            `;
        case 'details2':
            return `
                <h2>Plutus Paradox</h2>
                <img src="Image/img/sample2.png" alt="Sample Image 2">
                <p>Project details for Plutus Paradox...</p>
            `;
        // Add more cases for other details
        default:
            return '<p>No details available.</p>';
    }
}

// Functions to show and hide details for specific elements
function showDetails(id) {
    document.getElementById(id).style.display = 'block';
}

function hideDetails(id) {
    document.getElementById(id).style.display = 'none';
}