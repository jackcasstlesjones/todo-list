export class ToDoCreate {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  returnToDo() {
    return console.log(
      this.title,
      this.description,
      this.dueDate,
      this.priority
    );
  }
}
