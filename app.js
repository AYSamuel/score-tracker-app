const playerDisplay1 = document.querySelector('#player1display');
const playerDisplay2 = document.querySelector('#player2display');
const scoreTracker = document.querySelector('#playto');
const player1Button = document.querySelector('#player1btn');
const player2Button = document.querySelector('#player2btn');
const resetButton = document.querySelector('#reset');

let player1Score = 0;
let player2Score = 0;
let winningScore = 3;
let gameOver = false;

scoreTracker.addEventListener('change', function () {
  let score = this.value;
  winningScore = Number(score);
  reset();
});

player1Button.addEventListener('click', () => {
  if (!gameOver) {
    player1Score += 1;
    playerDisplay1.textContent = player1Score;
    if (player1Score === winningScore) {
      gameOver = true;
    }
  }
});

player2Button.addEventListener('click', () => {
  if (!gameOver) {
    player2Score += 1;
    playerDisplay2.textContent = player2Score;
    if (player2Score === winningScore) {
      gameOver = true;
    }
  }
});

resetButton.addEventListener('click', reset);

function reset() {
  player1Score = 0;
  player2Score = 0;
  playerDisplay1.textContent = 0;
  playerDisplay2.textContent = 0;
  gameOver = false;
}
