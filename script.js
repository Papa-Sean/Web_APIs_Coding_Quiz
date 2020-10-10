var timer
var timeTotal
(function(){
    function buildQuiz(){
      const output = [];
//questions
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
  //loop for each answer - html buttons
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
//quiz answers
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
// if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
        }
        // if answer is wrong
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  //results
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "What does /'CSS/' stand for?",
            answers: {
                a: "Club Social Scene",
                b: "Cascading Style Sheets",
                c: "Cost Still Stings"
            },
            correctAnswer: "b"
        },
        {
            question: "What does /'CSS/' stand for2?",
            answers: {
                a: "Club Social Scene",
                b: "Cascading Style Sheets",
                c: "Cost Still Stings"
            },
            correctAnswer: "b"
        },
        {
            question: "What does /'CSS/' stand for3?",
            answers: {
                a: "Club Social Scene",
                b: "Cascading Style Sheets",
                c: "Cost Still Stings"
            },
            correctAnswer: "b"
        },
        {
            question: "What does /'CSS/' stand for4?",
            answers: {
                a: "Club Social Scene",
                b: "Cascading Style Sheets",
                c: "Cost Still Stings"
            },
            correctAnswer: "b"
        }
    ]
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);

    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
//adding a timer to start the first time "next" button is clicked
  function createTimer(TimerID, time){timer = document.getElementById("TimerID");timeTotal = Time;UpdateTimer();window.setTimeout("Tick()",1000);}
  function Tick(){
      if(timeTotal <= 0) {alert("Time's up!");return;} timeTotal -=1;UpdateTimer();window.setTimeout("Tick()",1000);
    }
function UpdateTimer(){timer.innerHTML = timeTotal;}

    