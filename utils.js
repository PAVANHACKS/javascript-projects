// utils.js
// Generate a unique ID for each task
export function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
