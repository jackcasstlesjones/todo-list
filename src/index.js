import {
  defaultArray,
  getLocalStorage,
  getLocalStorageBigProj,
} from "./application-module";

import { renderBigProjectsArray, renderProject } from "./dom-module";

const savedBigProj = getLocalStorageBigProj();
console.log(savedBigProj);
renderBigProjectsArray(savedBigProj);

const savedData = getLocalStorage();
renderProject(savedData);

import "./style.css";
