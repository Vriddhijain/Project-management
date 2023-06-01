// Task Assignment
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const assigneeSelect = document.getElementById('assignee-select');
const tasksList = document.getElementById('tasks');

taskForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskDescription = taskInput.value;
  const assignee = assigneeSelect.value;

  if (taskDescription && assignee) {
    const taskItem = document.createElement('li');
    taskItem.textContent = `Task: ${taskDescription} - Assignee: ${assignee}`;
    tasksList.appendChild(taskItem);
    taskInput.value = '';
    assigneeSelect.value = '';
  }
});

// User Communication
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesList = document.getElementById('messages');

messageForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const messageText = messageInput.value;

  if (messageText) {
    const messageItem = document.createElement('li');
    messageItem.textContent = messageText;
    messagesList.appendChild(messageItem);
    messageInput.value = '';
  }
});
