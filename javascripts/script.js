   // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal pop-up untuk form kontak
    const contactForm = document.getElementById('contact-form');
    const contactButton = document.getElementById('contact-button');
    const modal = document.getElementById('contactModal');
    const closeModal = document.getElementsByClassName('close')[0];

    contactButton.onclick = function() {
        modal.style.display = "block";
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Sticky navbar
    window.onscroll = function() {makeSticky()};
    var navbar = document.querySelector('.navbar');
    var sticky = navbar.offsetTop;

    function makeSticky() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }


