const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

let tasks = loadTasks();
renderTasks();

addTaskButton.addEventListener("click", () => {
    const input = taskInput.value.trim();

    if (input === "") return;

    tasks.push(input);
    saveTasks();
    renderTasks();

    taskInput.value = "";
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        // checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // text
        const span = document.createElement("span");
        span.textContent = task + " ";

        // delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // checkbox logic
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        });

        // delete logic
        deleteButton.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        // append order
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const data = localStorage.getItem("tasks");

    if (data === null) return [];

    return JSON.parse(data);
}