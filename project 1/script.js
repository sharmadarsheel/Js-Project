const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const input = taskInput.value.trim();

    if (input === "") {
        console.log("Please enter a task");
        return;
    }

    addTask(input);
    taskInput.value = "";
});

function addTask(taskText) {

    // Create <li>
    const newTask = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Text
    const text = document.createElement("span");
    text.textContent = taskText;

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Append elements inside li
    newTask.appendChild(checkbox);
    newTask.appendChild(text);
    newTask.appendChild(deleteButton);

    // Append li to ul
    taskList.appendChild(newTask);

    // Delete functionality
    deleteButton.addEventListener("click", () => {
        newTask.remove();
    });

    // Checkbox functionality
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            text.style.textDecoration = "line-through";
        } else {
            text.style.textDecoration = "none";
        }
    });
}