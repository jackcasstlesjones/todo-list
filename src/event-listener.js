import { addToProject } from "./application-module";
import { displayProject, renderProject } from "./dom-module";

export function buttonEventListener() {
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    addToProject();
    renderProject();
  });
}
