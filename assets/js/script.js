/*
    Datei: script.js
    Beschreibung: JavaScript für die interaktive Logik der Webseite.
    Erstellt von: Norbert Fekete
    Erstelldatum: 11.09.2024
    Letzte Änderung: 11.09.2024
*/

/************************************** Slideshow Hauptseite **************************************/

// Array mit Pfaden zu den Bildern für die Slideshow
const images = [
    "assets/img/heroimage1.jpg",
    "assets/img/heroimage2.jpg",
    "assets/img/heroimage3.jpg"
];

// Initialisierung des Indexes, um das aktuell angezeigte Bild zu tracken
let currentImageIndex = 0;

// Auswahl des div-Elements mit der ID 'hero', das als Hintergrund für die Bilder dient
const heroDiv = document.getElementById('hero');

// Funktion, die alle 3 Sekunden ausgeführt wird, um das Hintergrundbild zu wechseln
setInterval(() => {
    // Erhöht den Index, um das nächste Bild anzuzeigen, und setzt ihn zurück, wenn das Ende des Arrays erreicht ist
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Ändert das Hintergrundbild des ausgewählten div-Elements
    heroDiv.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}, 3000); // 3000 Millisekunden = 3 Sekunden
