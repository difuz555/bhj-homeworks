const taskInput = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');

tasksForm.addEventListener('submit', e => {
    e.preventDefault();
})

btn.addEventListener('click', () => {
    if (taskInput.value) {
        let task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = '<div class="task__title">' + taskInput.value + '</div><a href="#" class="task__remove">&times;</a>';
        tasksList.appendChild(task);

        let taskRemove = task.lastElementChild;
        taskRemove.addEventListener('click', () => {
            taskRemove.parentElement.remove();
        })
        
        tasksForm.reset();
    }
})