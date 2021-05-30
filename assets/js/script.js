var buttonEl = document.querySelector(".btn");
var tasksToDoEl = document.querySelector("#tasks-to-do");



function createTaskHandler() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener('click', createTaskHandler)