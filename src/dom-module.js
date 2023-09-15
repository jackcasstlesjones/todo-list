import { addRemoveFunction, bigProjectsArray } from "./application-module";

// HTML input elements
const userTitle = document.getElementById("title");
const userDescription = document.getElementById("description");
const userDueDate = document.getElementById("due-date");
const userPriority = document.getElementById("priority");
const contentDiv = document.getElementById("content");

const bigProjectsContainer = document.getElementById("projects-container");

// NEED TO FIGURE OUT WHY THIS DOESN'T WORK WITHOUT RETURNING newToDo ******************
function createTodoCards() {
  const content = document.getElementById("content");
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

function renderProject(projectArray) {
  contentDiv.innerHTML = "";

  projectArray.forEach(function (arrayElement) {
    const newToDoElement = createTodoCards();
    newToDoElement.classList.add("to-do-card");
    newToDoElement.textContent = `Title: ${arrayElement.title} Description: ${arrayElement.description} Due Date: ${arrayElement.dueDate} Priority: ${arrayElement.priority}`;
    const removeBtn = createRemoveButton(newToDoElement);
    newToDoElement.dataset.index = projectArray.indexOf(arrayElement);
    addRemoveFunction(removeBtn, newToDoElement.dataset.index, projectArray);
  });
}

function renderBigProjectsArray() {
  bigProjectsContainer.innerHTML = "";

  bigProjectsArray.forEach(function (arrayElement) {});
}

export {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  createTodoCards,
  renderProject,
};

/*


*/
