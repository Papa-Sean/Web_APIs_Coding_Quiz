// linked my quiz/results/button to html doc
const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results-container");
const submitButton = document.getElementById("submit");

function buildQuiz(){}
function showResults(){}

buildQuiz();
//add event listener for the button
submitButton.addEventListener('click', showResults);
//adding questions
const quizQuestions = [
    {
        question: "What does /'CSS/' stand for?",
        answers: {
            a: "Club Social Scene",
            b: "Cascading Style Sheets",
            c: "Cost Still Stings"
        },
        correctAnswer: "b"
    },
    {}
]
