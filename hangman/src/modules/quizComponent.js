import { createElement } from "./helpers";

let wordArr = [];
let quizWordContainer = null;
function createComponent(quizQuestion) {
  const wordToGuess = quizQuestion.answer.toUpperCase();
  const wordLength = quizQuestion.answer.length;
  wordArr = wordToGuess.split("");
  console.log(wordLength + " " + wordToGuess);
  const quiz = createElement("div", ["quiz"]);
  quizWordContainer = createElement("div", [
    "quiz-word",
    "flex",
    "flex-jc-center",
    "flex-ai-center",
  ]);
  wordArr.forEach((word) => {
    const letterContainer = createElement("div", [
      "letter",
      "flex",
      "flex-jc-center",
      "flex-ai-center",
    ]);
    letterContainer.textContent = word;
    letterContainer.style.borderBottom = "3px solid red";
    letterContainer.style.color = "white";
    quizWordContainer.append(letterContainer);
  });

  const hint = createElement("h2", ["hint", "flex", "flex-fw-wrap"]);
  hint.textContent = "Hint: " + quizQuestion.question;
  const incorrectGuesses = createElement("p", ["hint"]);
  incorrectGuesses.textContent = "Incorrect guesses: " + counter();

  quiz.append(quizWordContainer);
  quiz.append(hint);
  quiz.append(incorrectGuesses);
  return quiz;
}

function counter() {
  return;
}

export { createComponent, wordArr, quizWordContainer };
