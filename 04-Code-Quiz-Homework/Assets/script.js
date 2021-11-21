// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```

var timerEl = document.getElementById("count");
var startButton = document.getElementById("startbutton");
var quizInfo = document.querySelector(".startquizinfo");
var quizQuestions = document.querySelector(".quizquestions");
var quizResults = document.querySelector(".quizresults");
quizQuestions.hidden = true;
quizResults.hidden = true;

function quizQuestion(questionIDX) {
    var question = questions[questionIDX];
    var questionHTML = document.createElement("div");
}

function startQuiz() {
quizInfo.setAttribute("class", "hide");
quizQuestions.setAttribute("class", "show");
quizQuestions.hidden = false;
timer ();
};

function timer() {
    var secondsLeft = 75;
    var countDown = setInterval(() => {
    secondsLeft --;
    timerEl.textContent = "Time Left: " + secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(countDown);
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz);



