const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const input = taskInput.value.trim();

    if (input === "") {
        console.log("Please enter a task");
        return;
    }

    // Create list item
    const newTask = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create task text
    const text = document.createElement("span");
    text.textContent = input;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "red";

    // Add elements inside <li>
    newTask.appendChild(checkbox);
    newTask.appendChild(text);
    newTask.appendChild(deleteButton);

    // Add <li> to <ul>
    taskList.appendChild(newTask);

    // Delete task
    deleteButton.addEventListener("click", () => {
        newTask.remove();
    });

    checkbox.addEventListener("change", () => {

    if (checkbox.checked === true) {
        text.style.textDecoration = "line-through"
    } else {
       text.style.textDecoration = "none"
    }

});
    // Clear input
    taskInput.value = "";
});