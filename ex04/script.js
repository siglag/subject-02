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
  deleteButton.classList.add("delete-button");

  task.appendChild(deleteButton);
  taskList.appendChild(task);

  totalTasks++;
  updateTaskCount();

  taskInput.value = "";
}

addButton.addEventListener("click", function () {
  addTask();
});

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

taskList.addEventListener("click", function (event) {
  if (event.target === taskList) {
    return;
  }

  if (event.target.classList.contains("delete-button")) {
    event.target.parentElement.remove();

    totalTasks--;
    updateTaskCount();

    return;
  }

  event.target.classList.add("completed");
});
