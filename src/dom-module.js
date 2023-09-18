import {
  addRemoveFunction,
  bigProjectsArray,
  addButtonEventListener,
  addCreateProjectFunction,
  saveLocalStorageBigProj,
  saveToLocalStorage,
} from "./application-module";

import { savedData } from "./index";

// HTML input elements
const userTitle = document.getElementById("title");
const userDescription = document.getElementById("description");
const userDueDate = document.getElementById("due-date");
const userPriority = document.getElementById("priority");
const contentDiv = document.getElementById("content");

const bigProjectsContainer = document.getElementById("projects-container");

const createProjectBtn = document.getElementById("create-project");

const projectHeader = document.getElementById("project-header");

const addBtnDiv = document.getElementById("add-button-div");

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
  addButton.classList.add("add-to-do-button");
  addBtnDiv.innerHTML = "";
  addBtnDiv.appendChild(addButton);
  return addButton;
}

function showButtonFunction(button, element, arrayElement, className) {
  button.addEventListener("click", function () {
    if (arrayElement.showOrHide === "hide") {
      element.classList.remove(arrayElement.showOrHide);
      arrayElement.showOrHide = "show";
    } else if (arrayElement.showOrHide === "show") {
      element.classList.remove(arrayElement.showOrHide);
      arrayElement.showOrHide = "hide";
    }
    console.log(arrayElement.showOrHide);
    element.classList.add(arrayElement.showOrHide);
  });
}

// Render individual project inside content Div

function renderProject(projectArray) {
  saveToLocalStorage(projectArray);
  saveLocalStorageBigProj(bigProjectsArray);

  // Reset content div innerHTMl
  contentDiv.innerHTML = "";

  // Create a new add button
  const newAddButton = renderProjectAddBtn();
  addButtonEventListener(projectArray, newAddButton);

  // For each element in the project array, create an element with the information and a remove button
  projectArray.forEach(function (arrayElement) {
    const newToDoElement = createToDoElement();
    newToDoElement.classList.add("to-do-card");

    // Create separate divs in each to do card
    const topDiv = createDiv(newToDoElement);
    const titleContent = createDiv(newToDoElement);
    const bottomDiv = createDiv(newToDoElement);
    titleContent.classList.add("title-content");
    titleContent.textContent = `Title: ${arrayElement.title} (Due: ${arrayElement.dueDate})`;

    // Create show button function
    const showButton = document.createElement("button");
    showButton.textContent = "Show more";
    showButtonFunction(showButton, bottomDiv, arrayElement);
    topDiv.classList.add("title-div");
    topDiv.appendChild(showButton);

    const descriptionContent = createDiv(bottomDiv);
    descriptionContent.textContent = `Description: ${arrayElement.description}`;

    const showOrHide = arrayElement.showOrHide;

    newToDoElement.style.opacity = arrayElement.opacity;

    bottomDiv.classList.add(showOrHide, "detail-div");

    // Remove button
    const removeBtn = createRemoveButton(newToDoElement);
    newToDoElement.dataset.index = projectArray.indexOf(arrayElement);
    addRemoveFunction(removeBtn, newToDoElement.dataset.index, projectArray);

    // Priority dropdown with ability to edit
    const priorityDiv = createDiv(bottomDiv);
    priorityDiv.classList.add("priority-div");
    const priorityDropdown = createPriorityDropdown(
      priorityDiv,
      arrayElement,
      bottomDiv
    );
    priorityDropdownFunction(priorityDropdown, arrayElement, projectArray);

    // Edit button
    const editBtn = createEditButton(priorityDiv);
    editBtnFunction(editBtn, arrayElement, projectArray, bottomDiv);

    // Complete To Do button
    const completedBtn = createCompleteToDoButton(topDiv);
    toDoCompleteFunction(
      completedBtn,
      newToDoElement,
      arrayElement,
      projectArray
    );
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

// Create a HTML edit button
function createEditButton(element) {
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-button");
  element.appendChild(editBtn);
  return editBtn;
}

// Edit button function
function editBtnFunction(button, arrayElement, projectArray, div) {
  button.addEventListener("click", function () {
    const newDetails = prompt("What do you want the new details to be?");

    arrayElement.description = newDetails;

    renderProject(projectArray);
  });
}

function createPriorityDropdown(element, arrayElement, styledElement) {
  const priorityDropdown = document.createElement("select");
  const label = document.createElement("p");
  label.textContent = "Priority:";
  const optionOne = document.createElement("option");
  optionOne.textContent = "High";
  optionOne.value = "High";
  const optionTwo = document.createElement("option");
  optionTwo.textContent = "Medium";
  optionTwo.value = "Medium";
  const optionThree = document.createElement("option");
  optionThree.textContent = "Low";
  optionThree.value = "Low";

  if (arrayElement.priority === "High") {
    optionOne.setAttribute("selected", true);
    priorityDropdown.style.backgroundColor = "#E03C32";
  } else if (arrayElement.priority === "Medium") {
    optionTwo.setAttribute("selected", true);
    priorityDropdown.style.backgroundColor = "#FFD301";
  } else if (arrayElement.priority === "Low") {
    priorityDropdown.style.backgroundColor = "#7BB662";
    optionThree.setAttribute("selected", true);
  }
  element.appendChild(label);
  priorityDropdown.appendChild(optionOne);
  priorityDropdown.appendChild(optionTwo);
  priorityDropdown.appendChild(optionThree);
  element.appendChild(priorityDropdown);
  return priorityDropdown;
}

function priorityDropdownFunction(button, arrayElement, projectArray) {
  button.addEventListener("change", function () {
    arrayElement.priority = button.value;

    renderProject(projectArray);
  });
}

function createCompleteToDoButton(element) {
  const button = document.createElement("button");
  button.textContent = "Complete";
  element.appendChild(button);

  return button;
}

function toDoCompleteFunction(button, element, arrayElement, projectArray) {
  button.addEventListener("click", function () {
    arrayElement.opacity = 0.5;
    renderProject(projectArray);
  });
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

      console.log(arrayElement.projectArray);
      // projectHeader.textContent = arrayElement.name;
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
