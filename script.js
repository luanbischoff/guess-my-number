'use strict';

const checkBtn = document.querySelector('.check');
const input = document.querySelector('.guess');
const scoreMessage = document.querySelector('.score');
const body = document.querySelector('body');
const numberMessage = document.querySelector('.number');
const highscoreMessage = document.querySelector('.highscore');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const playAgain = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreMessage.textContent = score;
  numberMessage.textContent = '?';
  displayMessage('Start guessing...');
  input.value = '';
  body.style.backgroundColor = '#222';
  numberMessage.style.width = '15rem';
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(input.value);
  if (guess <= 0) {
    displayMessage('❌ Invalid number!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '↘️ Too low!' : '↗️ Too high!');
      score--;
      scoreMessage.textContent = score;
    } else {
      score = 0;
      displayMessage('❗ You lost the game!');
      scoreMessage.textContent = score;
    }
  } else if (guess === secretNumber) {
    displayMessage('✔️ Correct number!');
    numberMessage.textContent = secretNumber;
    numberMessage.style.width = '30rem';
    body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      highscoreMessage.textContent = highscore;
    }
  }
});

const againBtn = document.querySelector('.again');

againBtn.addEventListener('click', function () {
  playAgain();
});
