/*
    Datei: searcharticle.js
    Beschreibung: Artikelsuche in der Artikelübersicht
    Erstellt von: Norbert Fekete
    Erstelldatum: 15.10.2024
    Letzte Änderung: 15.10.2024
*/

/************************************** Search Article **************************************/

function filterArticles() {
    // Get the value from the search input field and convert it to lowercase for case-insensitive matching
    const searchValue = document.getElementById('searchInput').value.toLowerCase();

    // Select all article elements within the #articleList container
    const articles = document.querySelectorAll('#articleList article');

    // Loop through each article element
    articles.forEach(article => {
        // Get the text content of the article's title (inside the <h3> tag) and convert it to lowercase
        const title = article.querySelector('h3').textContent.toLowerCase();

        // Get the text content of the article's first paragraph (<p> tag) and convert it to lowercase
        const content = article.querySelector('p').textContent.toLowerCase();

        // If the search value is found in either the title or content, display the article
        if (title.includes(searchValue) || content.includes(searchValue)) {
            article.style.display = 'block'; // Show the article if it matches the search
        } else {
            article.style.display = 'none';  // Hide the article if it doesn't match
        }
    });
}