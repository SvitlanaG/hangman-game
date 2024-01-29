import { createElement } from "./helpers";
import { wordToGuess } from "./quizComponent";
import * as Frame from "./frameComponent";
import * as Keyboard from "./keyboardComponent";

let modal = null;

function createComponent(isWinner) {
  modal = createElement("div", ["modal"]);
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
    modal.remove();
    const frame = document.getElementById("frame");
    frame.remove();
    const newFrameSection = Frame.createComponent();
    const body = document.getElementsByTagName("body")[0];
    body.append(newFrameSection);
    Keyboard.setIncorrectGuessesCounter(0);
  });

  container.append(message);
  container.append(word);
  container.append(button);
  modal.append(container);

  return modal;
}

export { createComponent };
