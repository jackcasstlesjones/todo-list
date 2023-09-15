import {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  renderProject,
  renderBigProjectsArray,
} from "./dom-module";

const bigProjectsArray = [];

let currentArray = "";

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

  pushToBigProjectsArray() {
    bigProjectsArray.push(this);
  }

  pushToOwnArray(whatever) {
    this.projectArray.push(whatever);
  }

  returnProject() {
    return this.projectArray;
  }
}

const defaultProject = new CreateProject("Coding");
defaultProject.pushToBigProjectsArray();
const defaultArray = defaultProject.returnProject();
console.log(defaultArray);

function createObject() {
  const title = getUserTitle();
  const description = getUserDescription();
  const dueDate = getUserDueDate();
  const priority = getUserPriority();
  const newObj = new ToDoCreate(title, description, dueDate, priority);
  return newObj;
}

function pushToProject(projectArray) {
  const newObj = createObject();
  projectArray.push(newObj);
  return newObj;
}

// Functionality for the remove button to splice from the project index
function addRemoveFunction(element, index, projectArray) {
  element.addEventListener("click", function () {
    projectArray.splice(index, 1);
    renderProject(projectArray);
  });
}

///////////////////////////// EVENT LISTENERS ///////////////////////

function createEventListener(array) {
  const submitDefaultBtn = document.getElementById("submit-to-default");
  submitDefaultBtn.addEventListener("click", function (e) {
    console.log(array);
    e.preventDefault();
    pushToProject(array);
    renderProject(array, "orange");
  });
}

function removeEventListener(element) {
  element.removeEventListener;
}

const createProjectBtn = document.getElementById("create-project");
createProjectBtn.addEventListener("click", function () {
  const projectName = prompt("What would you like your project to be called?");
  const newProjectObj = new CreateProject(projectName);
  newProjectObj.pushToBigProjectsArray();
  renderBigProjectsArray();
});

export {
  createObject,
  pushToProject,
  addRemoveFunction,
  defaultArray,
  createEventListener,
  bigProjectsArray,
  currentArray,
};
