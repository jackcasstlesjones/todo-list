import { ToDoCreate } from "./createtodo";

const title = "take bin out";
const description = "separate recycling and landfill";
const dueDate = "21/4/23";
const priority = "high";
let projectOne = [];

const newToDoItem = function () {
  projectOne.push(new ToDoCreate(title, description, dueDate, priority));
  console.log(projectOne);
};

newToDoItem();
newToDoItem();
newToDoItem();
