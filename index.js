// Load tasks and notes from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Display tasks and notes on page load
document.addEventListener('DOMContentLoaded', () => {
  displayTasks();
  displayNotes();
});

// Display tasks
function displayTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<strong>${task.title}</strong><p>${task.desc}</p>`;
    taskItem.classList.add('task-item');
    taskList.appendChild(taskItem);
  });
}

// Display notes
function displayNotes() {
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = '';
  notes.forEach((note, index) => {
    const noteItem = document.createElement('li');
    noteItem.innerHTML = `<strong>${note.title}</strong><p>${note.desc}</p>`;
    noteItem.classList.add('note-item');
    notesList.appendChild(noteItem);
  });
}

// Add new task
function addTask() {
  const taskTitle = document.getElementById('task-title').value.trim();
  const taskDesc = document.getElementById('task-desc').value.trim();

  if (taskTitle && taskDesc) {
    tasks.push({ title: taskTitle, desc: taskDesc });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
    displayTasks();
  }
}

// Add new note
function addNote() {
  const noteTitle = document.getElementById('note-title').value.trim();
  const noteDesc = document.getElementById('note-desc').value.trim();

  if (noteTitle && noteDesc) {
    notes.push({ title: noteTitle, desc: noteDesc });
    localStorage.setItem('notes', JSON.stringify(notes));
    document.getElementById('note-title').value = '';
    document.getElementById('note-desc').value = '';
    displayNotes();
  }
}
