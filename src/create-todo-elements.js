export function createTodoCards() {
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
}
