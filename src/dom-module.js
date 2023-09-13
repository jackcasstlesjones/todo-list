import { projectOne, addToProject } from "./application-module";

// HTML input elements
const userTitle = document.getElementById("title");
const userDescription = document.getElementById("description");
const userDueDate = document.getElementById("due-date");
const userPriority = document.getElementById("priority");
const contentDiv = document.getElementById("content");

// NEED TO FIGURE OUT WHY THIS DOESN'T WORK WITHOUT RETURNING newToDo ******************
function createTodoCards() {
  const content = document.getElementById("content");
  const newTodo = document.createElement("ul");
  const titleField = document.createElement("li");
  const descriptionField = document.createElement("li");
  const dueDateField = document.createElement("li");
  const priorityField = document.createElement("li");

  content.appendChild(newTodo);
  newTodo.appendChild(titleField);
  newTodo.appendChild(descriptionField);
  newTodo.appendChild(dueDateField);
  newTodo.appendChild(priorityField);

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

// Functionality for the remove button to splice from the projectOne index
function addRemoveFunction(element, index) {
  element.addEventListener("click", function () {
    console.log("poop");
    console.log(index);
    projectOne.splice(index, 1);
    renderProject();
  });
}

// Create a HTML remove button
function createRemoveButton(element) {
  const newBtn = document.createElement("button");
  newBtn.textContent = "Remove";
  newBtn.classList.add("remove-button");
  addRemoveFunction(newBtn);
  element.appendChild(newBtn);
  return newBtn;
}

// Add a data-index to a HTML element based on it's position in projectOne

//******** JUST NEED TO MAKE THE CONNECTION BETWEEN THE OBJECTS IN PROJECTONE AND THE ELEMENTS 'NEWCARD' !!!! ******************** */
function addDatasetIndex(element, object) {
  element.dataset.index = projectOne.indexOf(object);
  return element.dataset.index;
}

// WRITE A NEW RENDER FUNCTION

function renderProject() {
  contentDiv.innerHTML = "";
  projectOne.forEach(function (arrayElement) {
    const newCard = createTodoCards();
    newCard.classList.add("to-do-card");
    newCard.textContent = `Title: ${arrayElement.title} Description: ${arrayElement.description} Due Date: ${arrayElement.dueDate} Priority: ${arrayElement.priority}`;
    const removeBtn = createRemoveButton(newCard);
  });
}

export {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  createTodoCards,
  // displayProject,
  renderProject,
};
