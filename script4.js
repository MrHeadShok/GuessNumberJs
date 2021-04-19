`use strict`;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
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
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
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

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rm`;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
