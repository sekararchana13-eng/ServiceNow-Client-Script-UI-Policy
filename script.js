document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const taskCounter = document.getElementById('task-counter');

  let tasks = [];

  // Update UI counter
  function updateCounter() {
    const activeTasks = tasks.filter(t => !t.completed).length;
    taskCounter.textContent = `${activeTasks} task${activeTasks === 1 ? '' : 's'} remaining`;
  }

  // Render tasks from array
  function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = `task-item ${task.completed ? 'completed' : ''}`;

      const textSpan = document.createElement('span');
      textSpan.textContent = task.text;
      textSpan.addEventListener('click', () => toggleTask(index));

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => deleteTask(index));

      li.appendChild(textSpan);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });

    updateCounter();
  }

  // Add task handler
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (text) {
      tasks.push({ text: text, completed: false });
      taskInput.value = '';
      renderTasks();
    }
  });

  // Toggle completion
  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }

  // Delete task
  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }
});
