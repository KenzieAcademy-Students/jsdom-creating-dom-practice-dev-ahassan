let todos = [
  "Take Jim to the hair salon",
  "Drop off wedding invitation at mailbox",
  "Pick up the cake",
  "Call the caterers",
  "Schedule the flower delivery",
  "Dry Clean the Suits"
];

let renderTodoApp = function() {
  // Follow the instructions on my.kenzie.academy to complete the assignment.
  // Your Code Here

  // to render the title
  let app = document.getElementById("app");

  // to create title element
  let title = document.createElement("h3");
  title.innerText = "Todo List";
  app.append(title);

  // To render the list

  let tasks = document.createElement("ul");
  app.append(tasks);

  // loops through the array and creates a list item for each string within the array
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.innerText = todos[i];
    tasks.append(li);
  }
}
renderTodoApp();