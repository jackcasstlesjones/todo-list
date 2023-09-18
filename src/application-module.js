import {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  renderProject,
  renderBigProjectsArray,
} from "./dom-module";

const bigProjectsArray = [];

const createProjectBtn = document.getElementById("create-project");

let currentProject = "coding";

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

  returnProjectName() {
    return this.name;
  }
}

const defaultProject = new CreateProject("Coding");
defaultProject.pushToBigProjectsArray();
const defaultArray = defaultProject.returnProject();

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

///////////////////////////// EVENT LISTENERS ///////////////////////

function addButtonEventListener(array, element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    pushToProject(array);
    renderProject(array);
  });
}

// Functionality for the remove button to splice from the project index
function addRemoveFunction(element, index, projectArray) {
  element.addEventListener("click", function () {
    projectArray.splice(index, 1);
    renderProject(projectArray);
  });
}

function addCreateProjectFunction(element) {
  element.addEventListener("click", function () {
    const projectName = prompt(
      "What would you like your project to be called?"
    );
    const newProjectObj = new CreateProject(projectName);
    newProjectObj.pushToBigProjectsArray();
    renderBigProjectsArray();
  });
}

export {
  createObject,
  pushToProject,
  addRemoveFunction,
  defaultArray,
  addButtonEventListener,
  bigProjectsArray,
  currentProject,
  CreateProject,
  addCreateProjectFunction,
};
