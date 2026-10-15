
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task function
function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskValue;
    span.className = "task-text";

    // Mark task as completed
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete task dynamically
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Append elements
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Add button event
addBtn.addEventListener("click", addTask);

// Add task using Enter key
taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
