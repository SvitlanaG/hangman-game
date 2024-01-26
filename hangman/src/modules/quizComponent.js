import { createElement } from "./helpers";

function createComponent(quizQuestion) {
  const quiz = createElement("div", ["quiz"]);
  const quizWordContainer = createElement("div", ["quiz-word"]);

  const hint = createElement("h2", ["hint", "flex", "flex-fw-wrap"]);
  hint.textContent = "Hint: " + quizQuestion.question;
  const incorrectGuesses = createElement("p", ["hint"]);
  incorrectGuesses.textContent = "Incorrect guesses: : " + counter();

  quiz.append(quizWordContainer);
  quiz.append(hint);
  quiz.append(incorrectGuesses);
  return quiz;
}

function counter() {
  return;
}

export { createComponent };
