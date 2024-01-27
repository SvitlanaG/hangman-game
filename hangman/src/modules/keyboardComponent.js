import { createElement } from "./helpers";
import {
  wordArr,
  quizWordContainer,
  guessesCounterContainer,
} from "./quizComponent";
import * as Modal from "./modalComponent";
import { gallowsBody } from "./gallowsComponent";

let incorrectGuessesCounter = 0;
const maxIncorrectNumber = 6;

function createComponent() {
  const keysArr = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "-",
  ];
  const keyboard = createElement("div", ["keyboard"]);

  keysArr.forEach((key) => {
    const keyBtn = createElement("div", [
      "key",
      "flex",
      "flex-jc-center",
      "flex-ai-center",
    ]);
    keyBtn.textContent = key;
    keyboard.append(keyBtn);
    keyBtn.addEventListener("click", keyBtnClickHandler);
  });

  return keyboard;
}

function keyBtnClickHandler(event) {
  const clickedKeyBtn = event.target.innerText;
  openLetter(clickedKeyBtn);
  countIncorrectGuesses(clickedKeyBtn);
  createModal();
}

function keyPressHandler(event) {
  const pressedKey = event.key;
  openLetter(pressedKey.toUpperCase());
  countIncorrectGuesses(pressedKey.toUpperCase());
  createModal();
}

document.addEventListener("keydown", keyPressHandler);

function isGuessCorrect(letter) {
  return wordArr.includes(letter);
}

function openLetter(letterToGuess) {
  if (isGuessCorrect(letterToGuess)) {
    const letterDivs = quizWordContainer.querySelectorAll("div");
    letterDivs.forEach((letter, index) => {
      if (letterToGuess === letter.textContent) {
        letter.style.color = "black";
        letter.style.borderBottom = "3px solid black";
      }
    });
  }
}

function countIncorrectGuesses(letterToGuess) {
  if (!isGuessCorrect(letterToGuess) && !isEndGame()) {
    incorrectGuessesCounter += 1;
    guessesCounterContainer.innerHTML = `${incorrectGuessesCounter} / 6`;
    showBodyPart();
  }
}

function isEndGame() {
  return incorrectGuessesCounter === maxIncorrectNumber || areAllLettersOpen();
}

function areAllLettersOpen() {
  const letterDivs = Array.from(quizWordContainer.querySelectorAll("div"));
  return letterDivs.every((letter) => letter.style.color === "black");
}

function createModal() {
  if (isEndGame()) {
    const modal = Modal.createComponent(areAllLettersOpen());
    const body = document.getElementsByTagName("body")[0];
    body.append(modal);
  }
}

function showBodyPart() {
  let bodyPart = gallowsBody.getElementsByClassName("hidden")[0];
  bodyPart.classList.remove("hidden");
}

export { createComponent, incorrectGuessesCounter };
