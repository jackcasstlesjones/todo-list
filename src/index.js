import { ToDoCreate } from "./createtodo";
import { createTodoCards } from "./create-todo-elements";
import {
  getUserTitle,
  getUserDescription,
  getUserDueDate,
  getUserPriority,
} from "./getuserValues";
import "./style.css";

const submitBtn = document.getElementById("submit");
let projectOne = [];

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const title = getUserTitle();
  const description = getUserDescription();
  const dueDate = getUserDueDate();
  const priority = getUserPriority();
  // This creates an object with the user data
  const newObj = new ToDoCreate(title, description, dueDate, priority);
  console.log(newObj);

  // Next I need to add this object to the projectOne array
  projectOne.push(newObj);
  console.log(projectOne);

  // This creates the HTML for each To Do item
  let newCard = createTodoCards();

  // Then call a SEPARATE function (in a different module) that displays the projectOne array in the DOM
  newCard.textContent = JSON.stringify(newObj);
});
