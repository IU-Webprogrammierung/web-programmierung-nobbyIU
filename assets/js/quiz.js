/*
    Datei: quiz.js
    Beschreibung: Interaktives Quiz zum Thema Basketball
    Erstellt von: Norbert Fekete
    Erstelldatum: 10.10.2024
    Letzte Änderung: 10.10.2024
*/

/************************************** Basketball Quiz **************************************/

// Array mit den Quizfragen und den möglichen Antworten, inklusive der korrekten Antwort
const quizQuestions = [
    {
        question: "Wer gilt als der beste Basketballspieler aller Zeiten?",
        choices: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Magic Johnson"],
        correctAnswer: "Michael Jordan"
    },
    {
        question: "Wie viele Spieler stehen pro Team gleichzeitig auf dem Spielfeld?",
        choices: ["5", "6", "7", "4"],
        correctAnswer: "5"
    },
    {
        question: "Welches Land hat 2024 die Basketball-Weltmeisterschaft gewonnen?",
        choices: ["USA", "Deutschland", "Spanien", "Frankreich"],
        correctAnswer: "Deutschland"
    },
    {
        question: "Wie hoch ist der offizielle Basketballkorb?",
        choices: ["2,5 Meter", "3,0 Meter", "3,05 Meter", "3,5 Meter"],
        correctAnswer: "3,05 Meter"
    },
    {
        question: "Welches Team hält den Rekord für die meisten NBA-Meistertitel?",
        choices: ["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics", "Golden State Warriors"],
        correctAnswer: "Boston Celtics"
    },
    {
        question: "Wer war der MVP der NBA Finals 2020?",
        choices: ["LeBron James", "Anthony Davis", "Jimmy Butler", "Giannis Antetokounmpo"],
        correctAnswer: "LeBron James"
    },
    {
        question: "Wie lange dauert ein Viertel in einem NBA-Spiel?",
        choices: ["10 Minuten", "12 Minuten", "15 Minuten", "8 Minuten"],
        correctAnswer: "12 Minuten"
    },
    {
        question: "Welche Mannschaft gewann die NBA-Meisterschaft 2023?",
        choices: ["Golden State Warriors", "Denver Nuggets", "Boston Celtics", "Miami Heat"],
        correctAnswer: "Denver Nuggets"
    },
    {
        question: "Was ist der Rekord für die meisten Punkte, die ein Spieler in einem einzigen NBA-Spiel erzielt hat?",
        choices: ["81 Punkte", "100 Punkte", "92 Punkte", "73 Punkte"],
        correctAnswer: "100 Punkte"
    },
    {
        question: "In welchem Jahr fand das erste offizielle Basketballspiel statt?",
        choices: ["1891", "1901", "1910", "1885"],
        correctAnswer: "1891"
    }
];

// Funktion, die das Quiz-Layout auf der Seite rendert
function renderQuiz() {
    // Das div-Element, das das Quiz enthält
    const quizContainer = document.getElementById("quiz");

    // Durchlaufen aller Quizfragen
    quizQuestions.forEach((q, index) => {
        // Erstellt ein div für jede Frage
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("mb-8"); // Abstands-Klasse hinzugefügt

        // Erstellt und fügt die Frage (als <h4> Element) ein
        const questionTitle = document.createElement("h4");
        questionTitle.textContent = `${index + 1}. ${q.question}`; // Fragetext mit Nummerierung
        questionTitle.classList.add("font-bold", "mb-4"); // Stile für das Layout

        questionDiv.appendChild(questionTitle);

        // Erstellt ein div für die Antwortmöglichkeiten
        const choicesDiv = document.createElement("div");
        choicesDiv.classList.add("grid", "grid-cols-2", "md:grid-cols-4", "gap-4"); // Layout mit Grid

        // Fügt die Antwortmöglichkeiten (Radio Buttons) ein
        q.choices.forEach(choice => {
            const label = document.createElement("label");
            label.classList.add("flex", "items-center", "mb-2"); // Flex-Layout für die Optionen

            const input = document.createElement("input");
            input.type = "radio"; // Radio Button, um eine Auswahl zu ermöglichen
            input.name = `question${index}`; // Jede Frage hat ihren eigenen Namen, um die Auswahl zu gruppieren
            input.value = choice; // Setzt den Wert des Inputs auf die jeweilige Antwort
            input.classList.add("mr-2"); // Stil für den Abstand zwischen Input und Text

            label.appendChild(input); // Hängt das Input-Element an das Label
            label.appendChild(document.createTextNode(choice)); // Fügt den Antworttext hinzu

            choicesDiv.appendChild(label); // Hängt das Label an das div mit den Antwortmöglichkeiten
        });

        questionDiv.appendChild(choicesDiv); // Hängt das div mit den Antworten an das Frage-div
        quizContainer.appendChild(questionDiv); // Fügt die komplette Frage in das Quiz-Container-div ein

        // Fügt eine Linie zwischen den Fragen hinzu, außer nach der letzten Frage
        if (index < quizQuestions.length - 1) {
            const hr = document.createElement("hr");
            hr.classList.add("my-6", "border-gray-700"); // Linie für visuelle Trennung
            quizContainer.appendChild(hr);
        }
    });
}

// Funktion zur Berechnung des Quiz-Ergebnisses
function calculateQuizResult() {
    let score = 0; // Zählt die korrekten Antworten

    // Durchlaufen der Quizfragen und Überprüfung der ausgewählten Antwort
    quizQuestions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`); // Abfrage der ausgewählten Antwort
        if (selectedAnswer && selectedAnswer.value === q.correctAnswer) {
            score++; // Wenn die Antwort korrekt ist, wird der Score erhöht
        }
    });

    // Anzeige des Ergebnisses im Ergebnis-Container
    const resultContainer = document.getElementById("quizResult");
    resultContainer.textContent = `Du hast ${score} von ${quizQuestions.length} richtig!`; // Ausgabe des Ergebnisses
}

// Sobald der DOM geladen ist, wird das Quiz gerendert
document.addEventListener("DOMContentLoaded", renderQuiz);

// Event Listener für den Quiz-Submit-Button, der das Ergebnis berechnet
document.getElementById("submitQuiz").addEventListener("click", calculateQuizResult);