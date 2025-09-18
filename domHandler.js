// DOM manipulation logic
// Handles how tasks appear on the page

export function createTaskElement(task, onDelete) {
  const li = document.createElement("li");
  li.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");

  // When clicked, call the onDelete function
  deleteBtn.addEventListener("click", () => onDelete(task.id));

  li.appendChild(deleteBtn);
  return li;
}
