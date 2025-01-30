let editingTaskId = null;

function addTask() {
    const input = document.getElementById('tf-input');
    const addButton = document.querySelector('.button');
    const taskContainer = document.getElementById('task-container');
    
    if (editingTaskId) {
        const task = document.getElementById(editingTaskId);
        task.childNodes[0].nodeValue = input.value;
        addButton.textContent = 'Add Task';
        editingTaskId = null;
    } else {
        const task = document.createElement('li');
        task.appendChild(document.createTextNode(input.value));
        task.id = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);
        task.classList.add('list-item');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.setAttribute('onclick', `editTask('${task.id}')`);
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('onclick', `deleteTask('${task.id}')`);
    
        task.appendChild(editButton);
        task.appendChild(deleteButton);
        taskContainer.appendChild(task);
    }
    input.value = '';
}
function editTask(id) {
    const task = document.getElementById(id);
    document.getElementById('tf-input').value = '';
    document.querySelector('.button').textContent = 'Edit';
    editingTaskId = id;
}
function deleteTask(id) {
    const task = document.getElementById(id);
    task.remove();
    if (editingTaskId === id) {
        document.querySelector('.button').textContent = 'Add Task';
        editingTaskId = null;
    }
}
