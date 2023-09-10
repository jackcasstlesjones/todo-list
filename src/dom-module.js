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

const userTitle = document.getElementById("title");
const userDescription = document.getElementById("description");
const userDueDate = document.getElementById("due-date");
const userPriority = document.getElementById("priority");

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

export {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  createTodoCards,
};
