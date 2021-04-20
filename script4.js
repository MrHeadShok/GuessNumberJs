`use strict`;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highScore = 0;

let displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    displayMessage(`❌ No values introtuced`);
  } else if (guess === secretNumber) {
    displayMessage(`Bingo! ✔✌`);
    document.querySelector(`.number`).textContent = secretNumber;
    highScore = highScore + 20;
    document.querySelector(`.highscore`).textContent = highScore;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? `Go down a little bit 🤔`
          : `Go up a little bit 🤔`
      );

      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`Lost the round`);
      document.querySelector(`.number`).textContent = secretNumber;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rm`;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
