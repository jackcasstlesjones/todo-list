import {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
  createTodoCards,
} from "./dom-module";

const projectOne = [];

class ToDoCreate {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function createToDoObject() {
  const title = getUserTitle();
  const description = getUserDescription();
  const dueDate = getUserDueDate();
  const priority = getUserPriority();
  const newObj = new ToDoCreate(title, description, dueDate, priority);
  return newObj;
}

function pushToProject(object) {
  projectOne.push(object);
}

export { createToDoObject, pushToProject, projectOne };
