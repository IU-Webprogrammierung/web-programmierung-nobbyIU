/*
    Datei: script.js
    Beschreibung: JavaScript für die interaktive Logik der Webseite.
    Erstellt von: Norbert Fekete
    Erstelldatum: 11.09.2024
    Letzte Änderung: 11.09.2024
*/

// Slideshow Hauptseite
const images = [
    "assets/img/heroimage1.jpg",
    "assets/img/heroimage2.jpg",
    "assets/img/heroimage3.jpg"
];

let currentImageIndex = 0;
const heroDiv = document.getElementById('hero');

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroDiv.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}, 3000);
