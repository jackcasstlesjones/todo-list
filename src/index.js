import { ToDoCreate } from "./createtodo";
import { createTodoCards } from "./create-todo-elements";
import { getUserInfo } from "./getuserValues";
import "./style.css";

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(new ToDoCreate(getUserInfo()));
});

let projectOne = [];

const title = "take bin out";
const description = "separate recycling and landfill";
const dueDate = "21/4/23";
const priority = "high";

const newToDoItem = function () {
  projectOne.push(new ToDoCreate(title, description, dueDate, priority));
  console.log(projectOne);
};

newToDoItem();
newToDoItem();
newToDoItem();

createTodoCards();
