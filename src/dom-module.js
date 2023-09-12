import {
  projectOne,
  createToDoObject,
  pushToProject,
} from "./application-module";

const userTitle = document.getElementById("title");
const userDescription = document.getElementById("description");
const userDueDate = document.getElementById("due-date");
const userPriority = document.getElementById("priority");
const contentDiv = document.getElementById("content");

// NEED TO FIGURE OUT WHY THIS DOESN'T WORK WITHOUT RETURNING newToDo ******************
function createTodoCards() {
  const content = document.getElementById("content");
  const newTodo = document.createElement("p");

  content.appendChild(newTodo);

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
      // console.log(number);
    });
  });
}

function createRemoveButton(element) {
  const newBtn = document.createElement("button");
  newBtn.textContent = "Remove";
  newBtn.classList.add("remove-button");
  addRemoveFunction(newBtn);
  element.appendChild(newBtn);
}

// function addDatasetIndex(element) {
//   let newObj = addToProject();
//   element.dataset.index = projectOne.indexOf(newObj);
//   console.log(element.dataset.index);
// }

function resetHTML() {
  contentDiv.innerHTML = "";
}

// Resets the Content Div and loops through projectOne array, displaying each object as a string template literal
function displayProject() {
  console.log("boom");
  resetHTML();
  const newToDo = createToDoObject();
  pushToProject(newToDo);
  projectOne.forEach(function (project) {
    const newCard = createTodoCards();
    newCard.classList.add("to-do-card");
    newCard.textContent = `Title: ${project.title} Description: ${project.description} Due Date: ${project.dueDate} Priority: ${project.priority}`;

    newCard.dataset.index = projectOne.indexOf(newToDo);
    const newCardIndex = newCard.dataset.index;
    console.log(newCard.dataset.index);

    const newBtn = document.createElement("button");
    newBtn.textContent = "Remove";
    newBtn.classList.add("remove-button");
    addRemoveFunction(newBtn);
    newCard.appendChild(newBtn);

    newBtn.addEventListener("click", function () {
      // console.log("hello");
      projectOne.splice(newCardIndex, 1);
      console.log(newCardIndex);
      displayProject();
    });
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
