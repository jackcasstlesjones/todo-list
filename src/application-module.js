import {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  renderProject,
} from "./dom-module";

const bigProjectsArray = [];

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
    bigProjectsArray.push(this.projectArray);
  }

  returnProject() {
    console.log(bigProjectsArray);
    return this.projectArray;
  }
}

const defaultProject = new CreateProject("Coding");
defaultProject.pushToBigProjectsArray();
const secondProject = new CreateProject("Dancing");
const defaultArray = defaultProject.returnProject();
const secondArray = secondProject.returnProject();

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

function createEventListener() {
  const submitDefaultBtn = document.getElementById("submit-to-default");
  submitDefaultBtn.addEventListener("click", function (e) {
    e.preventDefault();
    pushToProject(defaultArray);
    renderProject(defaultArray);
    console.log(bigProjectsArray);
  });
}

function createEventListenerSecond() {
  const submitSecondBtn = document.getElementById("submit-to-second");
  submitSecondBtn.addEventListener("click", function (e) {
    e.preventDefault();
    pushToProject(secondArray);
    renderProject(secondArray);
    console.log(bigProjectsArray);
  });
}

const defaultBtn = document.getElementById("default-button");
const secondBtn = document.getElementById("second-button");

defaultBtn.addEventListener("click", function () {
  renderProject(defaultArray);
});

secondBtn.addEventListener("click", function () {
  renderProject(secondArray);
});

export {
  createObject,
  pushToProject,
  addRemoveFunction,
  defaultArray,
  createEventListener,
  createEventListenerSecond,
  bigProjectsArray,
};
