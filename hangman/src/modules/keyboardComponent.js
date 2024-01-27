import { createElement } from "./helpers";

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
  console.log("Key clicked:", clickedKeyBtn);
}

function keyPressHandler(event) {
  const pressedKey = event.key;
  console.log("Key pressed:", pressedKey.toUpperCase());
}

document.addEventListener("keydown", keyPressHandler);

export { createComponent };
