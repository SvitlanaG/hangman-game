import "./index.html";
import "./index.scss";
import * as Frame from "./modules/frameComponent";

const body = document.getElementsByTagName("body")[0];
const frameSection = Frame.createComponent();
body.append(frameSection);
