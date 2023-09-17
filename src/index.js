import { createEventListener, defaultArray } from "./application-module";

import { renderBigProjectsArray, renderProject } from "./dom-module";

renderBigProjectsArray();
renderProject(defaultArray, "pink");

import "./style.css";
