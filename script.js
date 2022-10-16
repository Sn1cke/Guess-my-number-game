'use strict';

const scoreMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        scoreMessage('💣 No number!');
    } else if (guess === secretNumber) {
        scoreMessage('🎇 Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            scoreMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            scoreMessage('You lost!');
            document.querySelector('.score').textContent = 0;
        }
    } else {
        scoreMessage('🏴‍☠️ Wrong number. Try again!');
    }
    });

    // Kunde ta bort denna genom att skriva guess !== secret number, och sen en tertary operator
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         scoreMessage('Too low!');
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         scoreMessage('You lost!');
    //         document.querySelector('.score').textContent = 0;
    //     }


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    scoreMessage('Try guessing again!');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    
});