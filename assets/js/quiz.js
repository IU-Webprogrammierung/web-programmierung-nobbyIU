/*
    Datei: quiz.js
    Beschreibung: Interaktives Quiz zum Thema Basketball
    Erstellt von: Norbert Fekete
    Erstelldatum: 10.10.2024
    Letzte Änderung: 10.10.2024
*/

// Basketball Quiz
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
        question: "Wie lange dauert ein Viertel in der NBA?",
        choices: ["12 Minuten", "10 Minuten", "15 Minuten", "8 Minuten"],
        correctAnswer: "12 Minuten"
    },
    {
        question: "Wie hoch ist ein Basketballkorb vom Boden gemessen?",
        choices: ["2,75 Meter", "3,05 Meter", "2,50 Meter", "3,50 Meter"],
        correctAnswer: "3,05 Meter"
    },
    {
        question: "Wie viele Fouls darf ein Spieler in der NBA begehen, bevor er disqualifiziert wird?",
        choices: ["5", "6", "7", "4"],
        correctAnswer: "6"
    },
    {
        question: "In welchem Jahr wurde Basketball von Dr. James Naismith erfunden?",
        choices: ["1889", "1891", "1895", "1901"],
        correctAnswer: "1891"
    },
    {
        question: "Welche Mannschaft hat die meisten NBA-Meisterschaften gewonnen?",
        choices: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
        correctAnswer: "Boston Celtics"
    },
    {
        question: "Wie viele Punkte gibt ein erfolgreicher Wurf von jenseits der Drei-Punkte-Linie?",
        choices: ["1 Punkt", "2 Punkte", "3 Punkte", "4 Punkte"],
        correctAnswer: "3 Punkte"
    },
    {
        question: "Wie viele Sekunden hat ein Team im FIBA-Basketball, um einen Angriff abzuschließen?",
        choices: ["24 Sekunden", "30 Sekunden", "14 Sekunden", "35 Sekunden"],
        correctAnswer: "24 Sekunden"
    }
];

function renderQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("mb-8");
        
        const questionTitle = document.createElement("h4");
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionTitle.classList.add("font-bold", "mb-4");

        questionDiv.appendChild(questionTitle);

        const choicesDiv = document.createElement("div");
        choicesDiv.classList.add("grid", "grid-cols-2", "md:grid-cols-4", "gap-4");

        q.choices.forEach(choice => {
            const label = document.createElement("label");
            label.classList.add("flex", "items-center", "mb-2");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`;
            input.value = choice;
            input.classList.add("mr-2");

            label.appendChild(input);
            label.appendChild(document.createTextNode(choice));

            choicesDiv.appendChild(label);
        });

        questionDiv.appendChild(choicesDiv);
        quizContainer.appendChild(questionDiv);

        if (index < quizQuestions.length - 1) {
            const hr = document.createElement("hr");
            hr.classList.add("my-6", "border-gray-700");
            quizContainer.appendChild(hr);
        }
    });
}

function calculateQuizResult() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === q.correctAnswer) {
            score++;
        }
    });

    const resultContainer = document.getElementById("quizResult");
    resultContainer.textContent = `Du hast ${score} von ${quizQuestions.length} richtig!`;
}

document.addEventListener("DOMContentLoaded", renderQuiz);

document.getElementById("submitQuiz").addEventListener("click", calculateQuizResult);