import { createElement } from "./helpers";
import { wordArr, quizWordContainer } from "./quizComponent";

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
}

function keyPressHandler(event) {
  const pressedKey = event.key;
  openLetter(pressedKey.toUpperCase());
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

export { createComponent };
