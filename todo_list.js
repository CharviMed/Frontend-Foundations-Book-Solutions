// Function to load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task));
}

// Function to save tasks to local storage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push(li.textContent.replace('EditDelete', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a task to the list
function addTaskToList(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;
    
    // Create edit and delete buttons
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => editTask(li);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteTask(li);
    
    const actions = document.createElement('span');
    actions.className = 'task-actions';
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    
    li.appendChild(actions);
    taskList.appendChild(li);
}

// Function to handle adding a new task
document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task) {
        addTaskToList(task);
        saveTasks();
        taskInput.value = '';
    }
});

// Function to edit a task
function editTask(li) {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = li.textContent.replace('EditDelete', '').trim();
    li.remove();
    saveTasks();
}

// Function to delete a task
function deleteTask(li) {
    li.remove();
    saveTasks();
}

// Load tasks on page load
window.onload = loadTasks;
