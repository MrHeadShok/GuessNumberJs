`use strict`;

const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    document.querySelector(`.message`).textContent = `❌ No values introtuced`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Bingo! ✔✌`;
    document.querySelector(`.number`).textContent = secretNumber;
    highScore = highScore + 20;
    document.querySelector(`.highscore`).textContent = highScore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(
        `.message`
      ).textContent = `Go down a little bit 🤔`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `Lost the round`;
      document.querySelector(`.number`).textContent = secretNumber;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Go up a little bit 🤔`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `Lost the round`;
      document.querySelector(`.number`).textContent = secretNumber;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {});
