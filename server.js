const express = require("express");
const app = express();

const tasks = require("./data");

// Send task id in task list
app.get("/tasks", (req, res) => {
  res.send(`
        <>Task List</
        <ul>
            ${Object.values(tasks)
              .map(
                (task) =>
                  `<li><a href="/tasks/${task._id}">${task.title}</a> - ID: ${task.description}</li>`
              )
              .join("")}
        </ul>
    `);
});

// Fetch task id in url
app.get("/tasks/:taskId", (req, res) => {
  const taskId = req.params.taskId;

  //   console.log(req.params);

  // Find the task in the database by ID
  const task = tasks[taskId];

  if (!task) {
    return res.status(404).send("Task not found");
  }
  // Render the task details page
  res.send(`
        <h1>Task Details</h1>
        <p><strong>Title:</strong> ${task.title}</p>
        <p><strong>Description:</strong> ${task.description}</p>
        <p><strong>ID:</strong> ${task.id}</p>
    `);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
