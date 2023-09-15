import { projectOne, addRemoveFunction } from "./application-module";

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

//******** JUST NEED TO MAKE THE CONNECTION BETWEEN THE OBJECTS IN PROJECTONE AND THE ELEMENTS 'NEWCARD' !!!! ******************** */
function addDatasetIndex(element, object) {
  element.dataset.index = projectOne.indexOf(object);
  return element.dataset.index;
}

// WRITE A NEW RENDER FUNCTION

function renderProject() {
  contentDiv.innerHTML = "";

  projectOne.forEach(function (arrayElement) {
    const newToDoElement = createTodoCards();
    newToDoElement.classList.add("to-do-card");
    newToDoElement.textContent = `Title: ${arrayElement.title} Description: ${arrayElement.description} Due Date: ${arrayElement.dueDate} Priority: ${arrayElement.priority}`;
    const removeBtn = createRemoveButton(newToDoElement);
    newToDoElement.dataset.index = projectOne.indexOf(arrayElement);
    addRemoveFunction(removeBtn, newToDoElement.dataset.index);
  });
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
