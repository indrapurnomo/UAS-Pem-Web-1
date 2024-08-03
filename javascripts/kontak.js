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

    // Validasi
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (email === "" || message === "") {
        alert("Semua bidang harus diisi!");
        return;
    }

    contactModal.style.display = "none"; 
    successPopup.style.display = "block"; 

    // bersihkan form
    contactForm.reset();
});
