import {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  renderProject,
} from "./dom-module";

const projectOne = [];

class ToDoCreate {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class CreateProject {
  constructor(name) {
    this.name = name;
    this.projectArray = [];
  }
}

const defaultProject = new CreateProject("Coding");
console.log(defaultProject);

defaultProject.projectArray.push("poo");
console.log(defaultProject.projectArray);

renderProject(defaultProject.projectArray);

function createObject() {
  const title = getUserTitle();
  const description = getUserDescription();
  const dueDate = getUserDueDate();
  const priority = getUserPriority();
  const newObj = new ToDoCreate(title, description, dueDate, priority);
  return newObj;
}
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////

/////////////////////////
function pushToProject() {
  const newObj = createObject();
  projectOne.push(newObj);
  return newObj;
}

// Functionality for the remove button to splice from the projectOne index
function addRemoveFunction(element, index) {
  element.addEventListener("click", function () {
    projectOne.splice(index, 1);
    renderProject();
  });
}

export { createObject, pushToProject, projectOne, addRemoveFunction };

function consolelog() {
  if (1 > 0) {
    console.log(
      ";kasas;dkfjasdjfbhasdnfbadskjbfapeifbqpwieubfpqweiufbpeiqabvapsdibfaipbfapidgvpqiabgpiu"
    );
  }
}
