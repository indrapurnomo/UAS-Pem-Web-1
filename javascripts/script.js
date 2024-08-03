  // Cek dokumen javaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
  
  // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

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

});
