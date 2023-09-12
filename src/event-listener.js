import { displayProject } from "./dom-module";
import {
  createToDoObject,
  projectOne,
  pushToProject,
} from "./application-module";

export function buttonEventListener() {
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    displayProject();
  });
}
