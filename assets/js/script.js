
var currentQuestion = 0;
var seconds = 60;
var correctAnswer = 0;
var quizOver = false;
var score = 0;
var hiScore = 0;
var qI = 0;

var timeEl = document.querySelector("#time");
var mainEl = document.getElementById("main");
var mainPrompt = document.querySelector('main');

function showQuestions() {
    const { question, choices, correctAnswer } = questions[qI];
    mainPrompt.innerHTML = `<h3> ${question} </h3>`;

    choices.forEach(ans => {
        mainPrompt.innerHTML += `<button> ${ans}</button><br>`
    });

    qI++;
}

function timer() {

    showQuestions();

    var timerInterval = setInterval(function () {
        seconds--;
        if (seconds < 1) {
            clearInterval(timerInterval);
            seconds = 0;
        }
        timeEl.textContent = seconds;

    }, 1000);
};



document.querySelector('#start-btn').addEventListener('click',timer)
//document.querySelector('button').addEventListener('click',())
//document.querySelector('button').addEventListener('click',())
//document.querySelector('button').addEventListener('click',())

