let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");

            if (tasks.length > 0) {
                 document.body.style.justifyContent = "flex-start";
                 document.body.style.paddingTop = "60px";
}           else {
                 document.body.style.justifyContent = "center";
}
        }

        li.innerHTML = `
            <div class="circle" onclick="toggleTask(${index})"></div>
            <span>${task.text}</span>
            <div class="delete-btn" onclick="deleteTask(${index})">×</div>
        `;

        list.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}
document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();
