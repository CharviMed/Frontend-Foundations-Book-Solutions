document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const quizQuestions = [
        {
            question: "Which language runs in a web browser?",
            answers: {
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript"
            },
            correctAnswer: "d"
        },
        {
            question: "What does CSS stand for?",
            answers: {
                a: "Central Style Sheets",
                b: "Cascading Style Sheets",
                c: "Cascading Simple Sheets",
                d: "Cars SUVs Sailboats"
            },
            correctAnswer: "b"
        },
        {
            question: "What does HTML stand for?",
            answers: {
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborginis"
            },
            correctAnswer: "a"
        }
    ];

    function buildQuiz() {
        // Store HTML output
        const output = [];

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            // Store the list of answer choices
            const answers = [];

            // For each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // Add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });

        // Combine output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        // Gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // Keep track of user's answers
        let numCorrect = 0;

        // For each question...
        quizQuestions.forEach((currentQuestion, questionNumber) => {
            // Find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // If answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // Add to the number of correct answers
                numCorrect++;

                // Color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                // If answer is wrong or blank
                // Color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // Show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }

    // Display quiz right away
    buildQuiz();

    // On submit, show results
    submitButton.addEventListener('click', showResults);
});
