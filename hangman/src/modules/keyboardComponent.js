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
  });

  return keyboard;
}

export { createComponent };
