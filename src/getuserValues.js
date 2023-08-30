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

function getUserInfo() {
  getUserTitle();
  getUserDescription();
  getUserDueDate();
  getUserPriority();
  return "hello";
}
export { getUserTitle, getUserDescription, getUserDueDate, getUserPriority };
