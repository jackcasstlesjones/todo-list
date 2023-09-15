import { addRemoveFunction, bigProjectsArray } from "./application-module";

// HTML input elements
const userTitle = document.getElementById("title");
const userDescription = document.getElementById("description");
const userDueDate = document.getElementById("due-date");
const userPriority = document.getElementById("priority");
const contentDiv = document.getElementById("content");

const bigProjectsContainer = document.getElementById("projects-container");

// Create a ToDo Element
function createTodoCards() {
  const newTodo = document.createElement("p");
  content.appendChild(newTodo);
  return newTodo;
}

///////// Get user inputs /////////
function getUserTitle() {
  return userTitle.value;
}
function getUserDescription() {
  return userDescription.value;
}
function getUserDueDate() {
  return userDueDate.value;
}
function getUserPriority() {
  return userPriority.value;
}
////////////////////////////////////

// Create a HTML remove button
function createRemoveButton(element) {
  const newBtn = document.createElement("button");
  newBtn.textContent = "Remove";
  newBtn.classList.add("remove-button");
  element.appendChild(newBtn);
  return newBtn;
}

// Add a data-index to a HTML element based on it's position in projectOne

// WRITE A NEW RENDER FUNCTION

function renderProject(projectArray, colour) {
  contentDiv.innerHTML = "";

  projectArray.forEach(function (arrayElement) {
    const newToDoElement = createTodoCards();
    newToDoElement.classList.add("to-do-card");
    newToDoElement.style.backgroundColor = `${colour}`;
    newToDoElement.textContent = `Title: ${arrayElement.title} Description: ${arrayElement.description} Due Date: ${arrayElement.dueDate} Priority: ${arrayElement.priority}`;
    const removeBtn = createRemoveButton(newToDoElement);
    newToDoElement.dataset.index = projectArray.indexOf(arrayElement);
    addRemoveFunction(removeBtn, newToDoElement.dataset.index, projectArray);
  });
}

function createProjectElement() {
  const projectButton = document.createElement("button");
  bigProjectsContainer.appendChild(projectButton);
  return projectButton;
}

function renderBigProjectsArray() {
  bigProjectsContainer.innerHTML = "";

  bigProjectsArray.forEach(function (arrayElement) {
    const newProjectElement = createProjectElement();
    newProjectElement.classList.add("project-button");
    newProjectElement.textContent = arrayElement;
  });
}

export {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  createTodoCards,
  renderProject,
  renderBigProjectsArray,
};

/*


*/
