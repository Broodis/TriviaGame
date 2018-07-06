    var currentQuestion = 0;
    var score = 0;
    var totalQuestions = questions.length;
    var timeTracker = 0;
    var timer = '';

    var container = document.getElementById('quizContainer');
    var questionEl = document.getElementById('question');
    var opt1 = document.getElementById('opt1');
    var opt2 = document.getElementById('opt2');
    var opt3 = document.getElementById('opt3');
    var opt4 = document.getElementById('opt4');
    var nextButton = document.getElementById('nextButton');
    var results = document.getElementById('result');

// Ask Question
    function askQuestion (questionIndex) {
        var q = questions[questionIndex];
        questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
        opt1.textContent = q.option1;
        opt2.textContent = q.option2;
        opt3.textContent = q.option3;
        opt4.textContent = q.option4;
    };

// Next Question
    function nextQuestion () {
        var selectedOption = document.querySelector('input[type=radio]:checked');
        if(!selectedOption){
            alert('Please choose an answer!');
            return;
        }
        var answer = selectedOption.value;
        if(questions[currentQuestion].answer == answer){
            score += 1;
        }
        selectedOption.checked = false;
        currentQuestion++;
        if(currentQuestion == totalQuestions - 1){
            nextButton.textContent = 'Finish';
        }
        if(currentQuestion == totalQuestions){
            container.style.display = 'none';
            results.style.display = '';
            results.textContent = 'Your Score: ' + score + ' out of 5';
            return;
        }
        askQuestion(currentQuestion);
    }

// Timer
var startTimer = function (){
    $('.timerSection').empty();
    timeTracker = 100;
    var timeTag = $('<div>');
    timeTag.addClass('time');
    timeTag.addClass('progress');
    var progressBar = $('<div>');
    progressBar.addClass('progress-bar');
    progressBar.width(timeTracker + '%');

    $('.timerSection').append(timeTag);
    $('.time').append(progressBar);	
    //Decrements Time
    timer = setInterval(timeDecrement,100);
}
var timeDecrement = function(){ 
    //Progress bar decrement
    $('.progress-bar').width(timeTracker + '%');
    timeTracker--;
    //if time gets to 0
    if(timeTracker === -10){
        userAnswer = false;
        //Clears Time
        clearInterval(timer);
        checkAnswer();
    }
}
    askQuestion(currentQuestion);