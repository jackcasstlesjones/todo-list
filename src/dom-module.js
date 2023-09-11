import { projectOne } from "./application-module";

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

function addRemoveFunction(element) {
  element.addEventListener("click", function () {
    projectOne.forEach(function (number) {
      console.log(number);
    });
  });
}

function createRemoveButton(element) {
  console.log("I'm making a button");
  const newBtn = document.createElement("button");
  newBtn.textContent = "Remove";
  newBtn.classList.add("remove-button");
  addRemoveFunction(newBtn);
  element.appendChild(newBtn);
}

// Resets the Content Div and loops through projectOne array, displaying each object as a string template literal
function displayProject() {
  contentDiv.innerHTML = "";
  return projectOne.forEach(function (project) {
    const newCard = createTodoCards();
    newCard.classList.add("to-do-card");
    newCard.textContent = `Title: ${project.title} Description: ${project.description} Due Date: ${project.dueDate} Priority: ${project.priority}`;
    createRemoveButton(newCard);
  });
}

export {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  createTodoCards,
  displayProject,
};
