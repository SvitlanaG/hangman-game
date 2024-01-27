import "./index.html";
import "./index.scss";
import * as Frame from "./modules/frameComponent";
import * as Modal from "./modules/modalComponent";

const body = document.getElementsByTagName("body")[0];
const frameSection = Frame.createComponent();
body.append(frameSection);

const modal = Modal.createComponent();
body.append(modal);
