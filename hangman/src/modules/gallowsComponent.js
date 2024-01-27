import { createElement } from "./helpers";

const svgHead = `<svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="101" height="101" fill="#none"/>
<g id="Assets">
<path d="M-726 -240C-726 -241.105 -725.105 -242 -724 -242H268C269.105 -242 270 -241.105 270 -240V756C270 757.105 269.105 758 268 758H-724C-725.105 758 -726 757.105 -726 756V-240Z" fill="none"/>
<path d="M-724 -241H268V-243H-724V-241ZM269 -240V756H271V-240H269ZM268 757H-724V759H268V757ZM-725 756V-240H-727V756H-725ZM-724 757C-724.552 757 -725 756.552 -725 756H-727C-727 757.657 -725.657 759 -724 759V757ZM269 756C269 756.552 268.552 757 268 757V759C269.657 759 271 757.657 271 756H269ZM268 -241C268.552 -241 269 -240.552 269 -240H271C271 -241.657 269.657 -243 268 -243V-241ZM-724 -243C-725.657 -243 -727 -241.657 -727 -240H-725C-725 -240.552 -724.552 -241 -724 -241V-243Z" fill="none" fill-opacity="0.1"/>
<g id="head">
<circle id="Ellipse 1" cx="50.5" cy="50.5" r="48" fill="none" stroke="black" stroke-width="5"/>
</g>
</g>
</svg>`;

const svgBody = `<svg width="5" height="131" viewBox="0 0 5 131" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="5" height="131" fill="black"/>
</svg>
`;

const svgHandOne = `<svg width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="68" height="81" fill="#none"/>
<path d="M-658 -406C-658 -407.105 -657.105 -408 -656 -408H336C337.105 -408 338 -407.105 338 -406V590C338 591.105 337.105 592 336 592H-656C-657.105 592 -658 591.105 -658 590V-406Z" fill="transparent"/>
<path d="M-656 -407H336V-409H-656V-407ZM337 -406V590H339V-406H337ZM336 591H-656V593H336V591ZM-657 590V-406H-659V590H-657ZM-656 591C-656.552 591 -657 590.552 -657 590H-659C-659 591.657 -657.657 593 -656 593V591ZM337 590C337 590.552 336.552 591 336 591V593C337.657 593 339 591.657 339 590H337ZM336 -407C336.552 -407 337 -406.552 337 -406H339C339 -407.657 337.657 -409 336 -409V-407ZM-656 -409C-657.657 -409 -659 -407.657 -659 -406H-657C-657 -406.552 -656.552 -407 -656 -407V-409Z" fill="none" fill-opacity="0.1"/>
<rect x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="black"/>
</svg>
`;

const svgHandTwo = `<svg width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="hand-two">
<rect id="Rectangle 6" y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="black"/>
</g>
</svg>
`;

const svgLegOne = `<svg width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="black"/>
</svg>
`;

const svgLegTwo = `<svg width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="black"/>
</svg>
`;
let gallowsBody = null;

function createComponent() {
  gallowsBody = createElement("div", ["gallows-body"]);

  const head = createElement("div", ["hidden"]);
  head.innerHTML = svgHead;
  head.setAttribute("id", "head");

  const body = createElement("div", ["hidden"]);
  body.innerHTML = svgBody;
  body.setAttribute("id", "body");

  const handOne = createElement("div", ["hidden"]);
  handOne.innerHTML = svgHandOne;
  handOne.setAttribute("id", "hand-one");

  const handTwo = createElement("div", ["hidden"]);
  handTwo.innerHTML = svgHandTwo;
  handTwo.setAttribute("id", "hand-two");

  const legOne = createElement("div", ["hidden"]);
  legOne.innerHTML = svgLegOne;
  legOne.setAttribute("id", "leg-one");

  const legTwo = createElement("div", ["hidden"]);
  legTwo.innerHTML = svgLegTwo;
  legTwo.setAttribute("id", "leg-two");

  gallowsBody.append(head);
  gallowsBody.append(body);
  gallowsBody.append(handOne);
  gallowsBody.append(handTwo);
  gallowsBody.append(legOne);
  gallowsBody.append(legTwo);

  return gallowsBody;
}

export { createComponent, gallowsBody };
