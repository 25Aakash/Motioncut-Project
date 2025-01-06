document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map-container').setView([48.8566, 2.3522], 13); // Coordinates for Paris

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    var eiffelTowerMarker = L.marker([48.8584, 2.2941]).addTo(map) // Eiffel Tower coordinates
        .bindPopup('<b>Eiffel Tower</b><br>Iconic landmark of Paris.')
        .openPopup();

    var louvreMarker = L.marker([48.8606, 2.3376]).addTo(map) // Louvre Museum coordinates
        .bindPopup('<b>Louvre Museum</b><br>The world\'s largest art museum.');

    var notreDameMarker = L.marker([48.8534, 2.3499]).addTo(map) // Notre Dame coordinates
        .bindPopup ('<b>Notre Dame Cathedral</b><br>A masterpiece of French Gothic architecture.');

    var sacreCoeurMarker = L.marker([48.8867, 2.3431]).addTo(map) // Sacré-Cœur coordinates
        .bindPopup('<b>Sacré-Cœur Basilica</b><br>Offers stunning views of the city.');

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            e.preventDefault();
        }
    });
});