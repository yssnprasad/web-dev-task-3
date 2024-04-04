const taskForm = document.getElementById('task-form');
const newTaskInput = document.getElementById('new-task');
const tasksList = document.getElementById('tasks');

let tasks = [];

taskForm.addEventListener('submit', e => {
    e.preventDefault();
    if (!newTaskInput.value.trim()) return;
    const newTask = {
        id: Date.now(),
        text: newTaskInput.value.trim(),
    };
    tasks.push(newTask);
    newTaskInput.value = '';
    renderTasks();
});

function renderTasks() {
    tasksList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task.text}</span>
                         <button class="delete-button" data-id=${task.id}>Delete</button>`;
        li.addEventListener('click', e => {
            if (e.target.classList.contains('delete-button')) {
                const taskId = e.target.dataset.id;
                tasks = tasks.filter(task => task.id !== +taskId);
                renderTasks();
            }
        });
        tasksList.appendChild(li);
    });
}