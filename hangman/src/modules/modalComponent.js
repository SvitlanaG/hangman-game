import { createElement } from "./helpers";
import { wordToGuess } from "./quizComponent";

function createComponent(isWinner) {
  const modal = createElement("div", ["modal"]);
  const container = createElement("div", [
    "modal-container",
    "flex",
    "flex-fd-column",
    "flex-jc-center",
  ]);
  const message = createElement("h2", ["modal-message"]);
  message.textContent = isWinner
    ? "Hooray, you win!"
    : "Unfortunately, you lost!";
  const word = createElement("div", ["modal-word"]);
  word.textContent = `The secret word is ***${wordToGuess}***`;
  const button = createElement("button", ["modal-button"]);
  button.textContent = "play again";

  button.addEventListener("click", function () {
    location.reload();
    modal.remove();
  });

  container.append(message);
  container.append(word);
  container.append(button);
  modal.append(container);

  return modal;
}

export { createComponent };
