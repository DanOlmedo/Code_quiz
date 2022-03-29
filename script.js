var startQuiz = document.querySelector("#start");
var headerEl = document.querySelector('header');
var timer = document.querySelector('#timer')

var next1Buttons = document.querySelector('.questionButtons1');
var next2Buttons = document.querySelector('.questionButtons2');
var next3Buttons = document.querySelector('.questionButtons3');
var next4Buttons = document.querySelector('.questionButtons4');

var finalButton = document.querySelector('.finalButton');

var firstQuestion = document.querySelector('.question1');
var secondQuestion = document.querySelector('.question2');
var thirdQuestion = document.querySelector('.question3');
var fourthQuestion = document.querySelector('.question4');
var fifthQuestion = document.querySelector('.question5');

var topScores = [];
var scores = document.querySelector('.leaderboard');

startQuiz.addEventListener("click", function() {
    headerEl.setAttribute('style', 'display:none;');
    startQuiz.setAttribute('style','display:none;');
    firstQuestion.setAttribute('style','visibility:visible;');
    timer.setAttribute("style", "visibility:visible");
});

next1Buttons.addEventListener("click",function(){
    firstQuestion.setAttribute('style','display:none;');
    secondQuestion.setAttribute('style','visibility:visible;');
});

next2Buttons.addEventListener("click",function(){
    secondQuestion.setAttribute('style','display:none;');
    thirdQuestion.setAttribute('style','visibility:visible;');
});

next3Buttons.addEventListener("click",function(){
    thirdQuestion.setAttribute('style','display:none;');
    fourthQuestion.setAttribute('style','visibility:visible;');
});

next4Buttons.addEventListener("click",function(){
    fourthQuestion.setAttribute('style','display:none;');
    fifthQuestion.setAttribute('style','visibility:visible;');
});

finalButton.addEventListener("click",function(){
    fifthQuestion.setAttribute('style','display:none;');
    scores.setAttribute('style','visibility:visible;');
});