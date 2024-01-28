import { createElement } from "./helpers";
import pieceOfPaper from "../assets/images/piece-of-paper.jpg";
import gallows from "../assets/images/gallows.png";
import * as Quiz from "./quizComponent";
import * as Keyboard from "./keyboardComponent";
import * as GallowsBody from "./gallowsComponent";
import { quizJSON } from "../quizQuestions";

function createComponent() {
  let randomNumber = Math.floor(Math.random() * 10);
  const frame = createElement("div", [
    "frame",
    "flex",
    "flex-fd-row",
    "flex-fw-wrap",
    "flex-jc-space-evenly",
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
  const titleContainer = createElement("div", ["frame-title"]);
  const title = createElement("h1", []);
  title.textContent = "HANGMAN GAME";
  const gallowsContainer = createElement("div", ["gallows-container"]);
  const img = createElement("img", []);
  img.src = gallows;
  img.alt = "Gallows";
  const gallowsBody = GallowsBody.createComponent();

  const quizContainer = createElement("div", []);
  const keyboardContainer = createElement("div", []);
  const quizSection = Quiz.createComponent(quizJSON[randomNumber]);
  const keyboardSection = Keyboard.createComponent();

  titleContainer.append(title);
  gallowsContainer.append(img);
  gallowsContainer.append(gallowsBody);
  gallowsPart.append(titleContainer);
  gallowsPart.append(gallowsContainer);
  frame.append(gallowsPart);
  quizPart.append(quizContainer);
  keyboardContainer.append(quizSection);
  keyboardContainer.append(keyboardSection);
  quizPart.append(keyboardContainer);
  frame.append(quizPart);
  return frame;
}

export { createComponent };
