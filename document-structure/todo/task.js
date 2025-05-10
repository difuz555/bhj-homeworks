const taskInput = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (taskInput.value.trim()) {
        let task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = '<div class="task__title">' + taskInput.value.trim() + '</div><a href="#" class="task__remove">&times;</a>';
        tasksList.appendChild(task);

        let taskRemove = task.lastElementChild;
        taskRemove.addEventListener('click', () => {
            taskRemove.parentElement.remove();
        })
        
        tasksForm.reset();
    } else {
        tasksForm.reset();
    }
})