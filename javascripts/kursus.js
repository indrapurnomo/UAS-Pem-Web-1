function toggleDescription(desainGrafisDescription) {
    var description = document.getElementById(desainGrafisDescription);
    var showButton = document.querySelector('button[onclick="toggleDescription(\'' + desainGrafisDescription + '\')"]:not(.btn-minimize)');
    var hideButton = document.querySelector('button[onclick="toggleDescription(\'' + desainGrafisDescription + '\')"].btn-minimize');

    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
        showButton.style.display = 'none';
        hideButton.style.display = 'inline-block';
    } else {
        description.style.display = 'none';
        showButton.style.display = 'inline-block';
        hideButton.style.display = 'none';
    }
}

// Inisialisasi tombol saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    var descriptions = document.querySelectorAll('.course-description');
    descriptions.forEach(function(description) {
        var showButton = document.querySelector(`button[onclick="toggleDescription('${description.id}')"]:not(.btn-minimize)`);
        var hideButton = document.querySelector(`button[onclick="toggleDescription('${description.id}')"].btn-minimize`);
        hideButton.style.display = 'none'; // Sembunyikan tombol "Minimize" saat halaman dimuat
    });
});
