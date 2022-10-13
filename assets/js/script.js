var seconds = 60;
var correct = 0;
var quizOver = false;
var score = 0;
var hiScore = 0;
var answers = questions.answers;
var timeEl = document.querySelector("#time");
var mainEl = document.getElementById("main");
var mainPrompt = document.querySelector('main');
var qI = 0;
var h1El = document

function showQuestions() {
 
    const { question, answers, correct } = questions[qI];
    //Backtick creates a template literal. Load stuff in and it makes a string
    //${} allows for any expression that produces a value
    mainPrompt.innerHTML = `<h1> ${question} </h1>`;
    answers.forEach(ans => {
        mainPrompt.innerHTML += `<button class='answerBtn'> ${ans}</button><br>`
    });
    pickAns();
}
function pickAns(){
    var buttons = document.getElementsByClassName('answerBtn')
    console.log(buttons);
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click',checkAns);
    }
    
}
function checkAns() {
    if (questions[qI].answer != questions[qI].correct){
       seconds - 3;
   } else{
        score ++
    };
    showQuestions();
    qI++;
};

    
function scores(){
    localStorage.setItem(JSON.stringify(score));
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

