const userTitle = document.getElementById("title");
const userDescription = document.getElementById("description");
const userDueDate = document.getElementById("due-date");
const userPriority = document.getElementById("priority");

function getUserTitle() {
  console.log(userTitle.value);
}
function getUserDescription() {
  console.log(userDescription.value);
}
function getUserDueDate() {
  console.log(userDueDate.value);
}
function getUserPriority() {
  console.log(userPriority.value);
}

function getUserInfo() {
  getUserTitle();
  getUserDescription();
  getUserDueDate();
  getUserPriority();
}
export { getUserInfo };
