import { createElement } from "./helpers";
import pieceOfPaper from "../assets/images/piece-of-paper.jpg";
import gallows from "../assets/images/gallows.png";

function createComponent() {
  const frame = createElement("div", [
    "frame",
    "flex",
    "flex-fd-row",
    "flex-fw-wrap",
    "flex-jc-center",
  ]);
  frame.style.background = `url(${pieceOfPaper}) no-repeat center / cover`;
  const gallowsPart = createElement("div", [
    "flex",
    "flex-fd-column",
    "flex-jc-center",
  ]);
  const quizPart = createElement("div", [
    "flex",
    "flex-fd-column",
    "flex-jc-center",
  ]);
  const titleContainer = createElement("div", []);
  const title = createElement("h1", []);
  title.textContent = "HANGMAN GAME";
  const gallowsContainer = createElement("div", []);
  const img = createElement("img", []);
  img.src = gallows;
  img.alt = "Gallows";

  const quizContainer = createElement("div", []);
  const keyboardContainer = createElement("div", []);

  titleContainer.append(title);
  gallowsContainer.append(img);
  gallowsPart.append(titleContainer);
  gallowsPart.append(gallowsContainer);
  frame.append(gallowsPart);
  quizPart.append(quizContainer);
  quizPart.append(keyboardContainer);
  frame.append(quizPart);
  return frame;
}

export { createComponent };
