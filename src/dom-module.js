import {
  addRemoveFunction,
  bigProjectsArray,
  addButtonEventListener,
  addCreateProjectFunction,
} from "./application-module";

// HTML input elements
const userTitle = document.getElementById("title");
const userDescription = document.getElementById("description");
const userDueDate = document.getElementById("due-date");
const userPriority = document.getElementById("priority");
const contentDiv = document.getElementById("content");

const bigProjectsContainer = document.getElementById("projects-container");

const createProjectBtn = document.getElementById("create-project");

const projectHeader = document.getElementById("project-header");

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

// RENDERING INDIVIDUAL PROJECTS INSIDE CONTENT DIV

function renderProjectHeader(projectName) {
  const projectHeader = document.createElement("h2");
  projectHeader.textContent = projectName;
  contentDiv.prepend(projectHeader);
}

// Create a ToDo Element
function createToDoElement() {
  const newTodo = document.createElement("p");
  content.appendChild(newTodo);
  return newTodo;
}

function createDiv(element) {
  const newDiv = document.createElement("div");
  element.appendChild(newDiv);
  return newDiv;
}

function renderProjectAddBtn() {
  const addButton = document.createElement("button");
  addButton.textContent = "Add To Do Item";
  contentDiv.appendChild(addButton);
  return addButton;
}

function showButtonFunction(button, element) {
  button.addEventListener("click", function () {
    element.classList.toggle("hide");
  });
}

// Render individual project inside content Div

function renderProject(projectArray) {
  // Reset content div innerHTMl
  contentDiv.innerHTML = "";

  // Create a new add button
  const newAddButton = renderProjectAddBtn();
  addButtonEventListener(projectArray, newAddButton);

  // For each element in the project array, create an element with the information and a remove button
  projectArray.forEach(function (arrayElement) {
    const newToDoElement = createToDoElement();
    newToDoElement.classList.add("to-do-card");
    const topDiv = createDiv(newToDoElement);
    const bottomDiv = createDiv(newToDoElement);
    const showButton = document.createElement("button");
    showButton.textContent = "Show more";
    showButtonFunction(showButton, bottomDiv);
    topDiv.textContent = `Title: ${arrayElement.title} Due Date: ${arrayElement.dueDate}`;
    topDiv.appendChild(showButton);
    bottomDiv.textContent = `Description: ${arrayElement.description} Priority: ${arrayElement.priority}`;
    bottomDiv.classList.add("hide");
    const removeBtn = createRemoveButton(newToDoElement);
    newToDoElement.dataset.index = projectArray.indexOf(arrayElement);
    addRemoveFunction(removeBtn, newToDoElement.dataset.index, projectArray);
  });
}

// Create a HTML remove button
function createRemoveButton(element) {
  const newBtn = document.createElement("button");
  newBtn.textContent = "Remove";
  newBtn.classList.add("remove-button");
  element.appendChild(newBtn);
  return newBtn;
}

///////////////////////// BIG PROJECT ARRAY & PROJECTS //////////////////////////////////////////////////////////

addCreateProjectFunction(createProjectBtn);

// Create project  elements
function createProjectElement() {
  const projectButton = document.createElement("button");
  bigProjectsContainer.appendChild(projectButton);
  return projectButton;
}

// Render the projects array inside the projects container
function renderBigProjectsArray() {
  // Reset the innerHTML of the projects div
  bigProjectsContainer.innerHTML = "";

  bigProjectsArray.forEach(function (arrayElement) {
    // Create project element and add classes + display the name of the project element (which is inside the big project)
    const newProjectElement = createProjectElement();
    newProjectElement.classList.add("project-button");
    newProjectElement.textContent = arrayElement.name;

    // Add an event listener to each project element to render that project inside the big project array
    newProjectElement.addEventListener("click", function () {
      // Render the current array elements project array
      renderProject(arrayElement.projectArray);

      projectHeader.textContent = arrayElement.name;
    });

    // Add each project element to the big projects container
    bigProjectsContainer.appendChild(newProjectElement);
  });
}

export {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  createToDoElement,
  renderProject,
  renderBigProjectsArray,
};

/*


*/
