//General variables: 
var startQuiz = document.querySelector("#start");
var headerEl = document.querySelector('header');
var timer = document.querySelector('#timer');
var secondsLeft = 60;
var timeLeft;

//Variables for question navigating:
var next1Buttons = document.querySelector('.questionButtons1');
var next2Buttons = document.querySelector('.questionButtons2');
var next3Buttons = document.querySelector('.questionButtons3');
var next4Buttons = document.querySelector('.questionButtons4');
var next5Buttons = document.querySelector('.questionButtons5');
var finalButton = document.querySelector('.finalButton');

//Variables for hidding and showing questions: 
var firstQuestion = document.querySelector('.question1');
var secondQuestion = document.querySelector('.question2');
var thirdQuestion = document.querySelector('.question3');
var fourthQuestion = document.querySelector('.question4');
var fifthQuestion = document.querySelector('.question5');
var leaderboard = document.querySelector('.leaderboard');

//Variables for score keeping:
var answera1 = document.querySelector('#a1');
var answera2 = document.querySelector('#a2');
var answera3 = document.querySelector('#a3');
var answera4 = document.querySelector('#a4');
var answerb1 = document.querySelector('#b1');
var answerb2 = document.querySelector('#b2');
var answerb3 = document.querySelector('#b3');
var answerb4 = document.querySelector('#b4');
var answerc1 = document.querySelector('#c1');
var answerc2 = document.querySelector('#c2');
var answerc3 = document.querySelector('#c3');
var answerc4 = document.querySelector('#c4');
var answerd1 = document.querySelector('#d1');
var answerd2 = document.querySelector('#d2');
var answerd3 = document.querySelector('#d3');
var answerd4 = document.querySelector('#d4');
var answere1 = document.querySelector('#e1');
var answere2 = document.querySelector('#e2');
var answere3 = document.querySelector('#e3');
var answere4 = document.querySelector('#e4');
var currentScore = [];

//Variables for high scores:
var scores = document.querySelector('.topScoreList');
var topScores = [];
var topScore1 = document.querySelector('#ts1');
var topScore2 = document.querySelector('#ts2');
var topScore3 = document.querySelector('#ts3');
var topScoreName1 = document.querySelector('#tsn1');
var topScoreName2 = document.querySelector('#tsn2');
var topScoreName3 = document.querySelector('#tsn3');

//Function to start quiz and timer: 
startQuiz.addEventListener("click", function() {
    headerEl.setAttribute('style', 'display:none;');
    startQuiz.setAttribute('style','display:none;');
    firstQuestion.setAttribute('style','visibility:visible;');
    timer.setAttribute("style", "visibility:visible");

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time left: " + secondsLeft;

        if(secondsLeft <= 0) {
          clearInterval(timerInterval);
          alert('Times up');
          firstQuestion.setAttribute('style','display:none;');
          secondQuestion.setAttribute('style','display:none;');
          thirdQuestion.setAttribute('style','display:none;');
          fourthQuestion.setAttribute('style','display:none;');
          fifthQuestion.setAttribute('style','display:none;');
          scores.setAttribute('style','visibility:visible;');
        }
      }, 500); 
      scoreKeeper();
      console.log(currentScore);
      console.log(currentScore.length);
});

//Functions for moving to next question:
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

next5Buttons.addEventListener("click",function(){
    fifthQuestion.setAttribute('style','display:none;');
    leaderboard.setAttribute('style','visibility:visible;');
    scores.setAttribute('style','visibility:visible;');
    timeLeft = secondsLeft;
    console.log(timeLeft);
    timer.setAttribute("style", "visibility:hidden");
    alert("Your score was" + timeLeft);
    setHighScores();
});

finalButton.addEventListener("click",function(){
    fifthQuestion.setAttribute('style','display:none;');
    leaderboard.setAttribute('style','visibility:visible;');
    scores.setAttribute('style','visibility:visible;');
    timeLeft = secondsLeft;
    timer.setAttribute("style", "visibility:hidden");
    alert("Your score was" + timeLeft);
    setHighScores()
});

function setHighScores(){ 
    topScore1.textContent = localStorage.getItem("topScore1");
    topScore2.textContent = localStorage.getItem("topScore2");
    topScore3.textContent = localStorage.getItem("topScore3");
    topScoreName1.textContent = localStorage.getItem("topScoreName1");
    topScoreName2.textContent = localStorage.getItem("topScoreName2");
    topScoreName3.textContent = localStorage.getItem("topScoreName3");

     if(secondsLeft>localStorage.getItem("topScore1")){
       topScore1.textContent = timeLeft;
       localStorage.setItem("topScore1", secondsLeft);
       scorer1 = window.prompt("Please enter your name1")
       localStorage.setItem("topScoreName1", scorer1);}
       topScoreName1.textContent = localStorage.getItem("topScoreName1");

     if (secondsLeft<localStorage.getItem("topScore1") && secondsLeft>localStorage.getItem("topScore2")){
       topScore2.textContent = timeLeft;
       localStorage.setItem("topScore2", secondsLeft);
       scorer2 = window.prompt("Please enter your name2")
       localStorage.setItem("topScoreName2", scorer2);}
       topScoreName2.textContent = localStorage.getItem("topScoreName2");

     if (secondsLeft<localStorage.getItem("topScore2") && secondsLeft>localStorage.getItem("topScore3")){
        topScore3.textContent = timeLeft;
        localStorage.setItem("topScore3", secondsLeft);
        scorer3 = window.prompt("Please enter your name3")
        localStorage.setItem("topScoreName3", scorer3);}
        topScoreName3.textContent = localStorage.getItem("topScoreName3");

     if(secondsLeft<localStorage.getItem("topScore3")){
        alert("Your score did not crack the top three");
     };
};

//Function for score keeping:
function scoreKeeper(){
    answera1.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answera2.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answera3.addEventListener("click",function(){currentScore.push(1);});
    answera4.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answerb1.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answerb2.addEventListener("click",function(){currentScore.push(1);});
    answerb3.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answerb4.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answerc1.addEventListener("click",function(){currentScore.push(1);});
    answerc2.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answerc3.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answerc4.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answerd1.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answerd2.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answerd3.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answerd4.addEventListener("click",function(){currentScore.push(1);});
    answere1.addEventListener("click",function(){currentScore.push(1);});
    answere2.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answere3.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
    answere4.addEventListener("click",function(){secondsLeft = secondsLeft-10;});
};
