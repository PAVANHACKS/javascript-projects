import { generateId } from "./utils.js";
import { createTaskElement } from "./domHandler.js";
import { getTasks, saveTask, deleteTask } from "./api.js";

// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load existing tasks from API when app starts
async function loadTasks() {
  const tasks = await getTasks();
  tasks.forEach((task) => renderTask(task));
}

// Render a task on screen
function renderTask(task) {
  const li = createTaskElement(task, handleDelete);
  taskList.appendChild(li);
}

// Handle Add Task
async function handleAdd() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const task = { id: generateId(), text };
  await saveTask(task); // Save to fake API
  renderTask(task);     // Show on screen
  taskInput.value = "";
}

// Handle Delete Task
async function handleDelete(id) {
  await deleteTask(id); // Delete from fake API
  taskList.innerHTML = ""; // Clear UI
  loadTasks(); // Reload updated list
}

// Event listeners
addBtn.addEventListener("click", handleAdd);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleAdd();
});

// Initialize app
loadTasks();
