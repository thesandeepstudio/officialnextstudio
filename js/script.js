// script.js

var modal = document.getElementById('modal');
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');

// Toggle the navigation menu
hamburger.addEventListener('click', function() {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
    // Prevent horizontal scrolling when nav-links are visible
    document.body.style.overflowX = navLinks.style.display === 'flex' ? 'hidden' : 'auto';
});

// When the user clicks on a gallery item, open the modal
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        var details = this.getAttribute('data-details');
        document.getElementById('modal-details').innerHTML = getDetailsContent(details);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent body scrolling
    });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable body scrolling
    }
}

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
