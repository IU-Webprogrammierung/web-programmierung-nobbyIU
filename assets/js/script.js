/*
    Datei: script.js
    Beschreibung: JavaScript für die interaktive Logik der Webseite.
    Erstellt von: Norbert Fekete
    Erstelldatum: 11.09.2024
    Letzte Änderung: 11.09.2024
*/

/* Toggle between adding and removing the "responsive" class to mainnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("mainnav");
    if (x.className === "mainnav") {
        x.className += " responsive";
    } else {
        x.className = "mainnav";
    }
}