import { defaultArray, getLocalStorage } from "./application-module";

import { renderBigProjectsArray, renderProject } from "./dom-module";

renderBigProjectsArray();
const savedData = getLocalStorage();
renderProject(savedData);

import "./style.css";
