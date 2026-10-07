const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

function updateTaskCount() {
  taskCount.textContent = totalTasks;
}

function addTask() {
  if (taskInput.value === "") {
    return;
  }

  const task = document.createElement("li");
  const deleteButton = document.createElement("button");

  task.textContent = taskInput.value;
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("onclick", "deleteTask(this)");
  deleteButton.classList.add("delete-button");

  task.appendChild(deleteButton);
  taskList.appendChild(task);

  totalTasks++;
  updateTaskCount();

  taskInput.value = "";
}
function deleteTask(element) {
  if (element.target === taskList) {
    return;
  }

  if (element.classList.contains("delete-button")) {
    element.parentElement.remove();

    totalTasks--;
    updateTaskCount();

    return;
  }

  element.classList.add("completed");
}
