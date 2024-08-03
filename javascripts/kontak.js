    // // Modal pop-up untuk form kontak
    // const contactForm = document.getElementById('contact-form');
    // const contactButton = document.getElementById('contact-button');
    // const modal = document.getElementById('contactModal');
    // const closeModal = document.getElementsByClassName('close')[0];

    // contactButton.onclick = function() {
    //     modal.style.display = "block";
    // }

    // closeModal.onclick = function() {
    //     modal.style.display = "none";
    // }

    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }

// Modal pop-up untuk form kontak
const contactForm = document.getElementById('contact-form');
const contactButton = document.getElementById('contact-button');
const contactModal = document.getElementById('contactModal');
const successPopup = document.getElementById('successPopup');
const closeButtons = document.querySelectorAll('.close');

contactButton.onclick = function() {
    contactModal.style.display = "block";
}

closeButtons.forEach(button => {
    button.onclick = function() {
        const modal = button.closest('.modal');
        modal.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
    if (event.target == successPopup) {
        successPopup.style.display = "none";
    }
}

// Form submission handler
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    contactModal.style.display = "none"; // Hide contact modal
    successPopup.style.display = "block"; // Show success popup
});
