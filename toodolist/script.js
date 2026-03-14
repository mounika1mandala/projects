let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function addTask() {
  const text = document.getElementById("taskText").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;

  if (text === "") return;

  tasks.push({
    id: Date.now(),
    text,
    dueDate,
    priority,
    done: false,
  });

  document.getElementById("taskText").value = "";
  document.getElementById("dueDate").value = "";

  saveTasks();
}

function toggleDone(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  saveTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
}

function setFilter(f) {
  currentFilter = f;
  document.querySelectorAll(".filters button").forEach((btn) =>
    btn.classList.remove("active")
  );
  event.target.classList.add("active");
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let filtered = tasks.filter((t) => {
    if (currentFilter === "all") return true;
    if (currentFilter === "done") return t.done;
    if (currentFilter === "pending") return !t.done;
    return t.priority === currentFilter;
  });

  filtered.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task" + (task.done ? " done" : "");
    li.innerHTML = `
      <div class="info">
        <strong>${task.text}</strong>
        <div class="meta">
          Priority: ${task.priority} | Due: ${task.dueDate || "N/A"}
        </div>
      </div>
      <div>
        <button onclick="toggleDone(${task.id})">${task.done ? "Undo" : "Done"}</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    list.appendChild(li);
  });
}

renderTasks();
