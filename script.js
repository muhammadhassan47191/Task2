let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  
  if (task !== "") {
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = " Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteTask(index);
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
