// Fake API calls using async/await
// In real-world, replace with fetch("https://api.example.com")

let fakeDatabase = [];

// Get tasks (simulate API GET request)
export async function getTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeDatabase);
    }, 500);
  });
}

// Save task (simulate API POST request)
export async function saveTask(task) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fakeDatabase.push(task);
      resolve(task);
    }, 500);
  });
}

// Delete task (simulate API DELETE request)
export async function deleteTask(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fakeDatabase = fakeDatabase.filter((task) => task.id !== id);
      resolve(id);
    }, 500);
  });
}
