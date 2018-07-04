$(document).ready(function () {

    var gameNotReady = true;
    var numberOfCorrectAnswers = 0;
    var numberOfIncorrectAnswers = 0;
    var score = 0;
    var currentQuestion = 0;
    var totalQuestions = questions.length;

    var $question = document.getElementById('question');
    var $opt1 = document.getElementById('opt1');
    var $opt2 = document.getElementById('opt2');
    var $opt3 = document.getElementById('opt3');
    var $opt4 = document.getElementById('opt4');

// Start Game

// Ask Question
    function askQuestion (questionIndex) {
        var q = questions[questionIndex];
        question.textContent = (questionIndex + 1) + '. ' + q.question;
        opt1.textContent = q.option1;
        opt2.textContent = q.option2;
        opt3.textContent = q.option3;
        opt4.textContent = q.option4;
    };
    askQuestion(currentQuestion);
// Next Question

// Receive Answer

// Check Answer

// Change Score

// Present Results

// Reset Game

});