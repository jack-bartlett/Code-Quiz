
var timerEl = document.getElementById("count");
var startButton = document.getElementById("startbutton");
var quizInfo = document.querySelector(".startquizinfo");
var quizQuestions = document.querySelector(".quizquestions");
var quizResults = document.querySelector(".quizresults");
quizQuestions.hidden = true;
quizResults.hidden = true;

function quizQuestion(questionIndex) {
    
    function quizQuestion() 
    
        var question = questions[questionIndex];
        
        var questionText = document.querySelector(".questionText");
        
        var possibleAnswers = document.querySelector(".possibleAnswers");
    
      
    };

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



