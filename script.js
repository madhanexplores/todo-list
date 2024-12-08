// Load tasks and notes from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// DOM elements
const taskList = document.getElementById('task-list');
const notesList = document.getElementById('notes-list');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Display tasks and notes on page load
document.addEventListener('DOMContentLoaded', () => {
  displayTasks();
  displayNotes();
});

// Display tasks
function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <strong>${task.title}</strong>
      <p>${task.desc}</p>
      <button onclick="deleteTask(${index})" class="delete-btn">Delete</button>
    `;
    taskItem.classList.add('task-item');
    taskList.appendChild(taskItem);
  });
}

// Display notes
function displayNotes() {
  notesList.innerHTML = '';
  notes.forEach((note, index) => {
    const noteItem = document.createElement('li');
    noteItem.innerHTML = `
      <strong>${note.title}</strong>
      <p>${note.desc}</p>
      <button onclick="deleteNote(${index})" class="delete-btn">Delete</button>
    `;
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

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

// Delete a note
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
}

// Display messages in the chat box
function displayMessage(message, sender = 'user') {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Process user input and respond
function askSteve() {
  const question = userInput.value.trim();
  if (question) {
    displayMessage(question, 'user');
    userInput.value = ''; // Clear input field

    // AI Response logic
    let response = 'Sorry, I didn’t understand that. Can you ask something else?';

    // Example of a question: "What are my tasks?"
    if (question.toLowerCase().includes('tasks')) {
      if (tasks.length > 0) {
        response = 'Here are your tasks:\n' + tasks.map(task => `${task.title}: ${task.desc}`).join('\n');
      } else {
        response = 'You have no tasks yet.';
      }
    }
    // Example of a question: "Do I have any notes?"
    else if (question.toLowerCase().includes('notes')) {
      if (notes.length > 0) {
        response = 'Here are your notes:\n' + notes.map(note => `${note.title}: ${note.desc}`).join('\n');
      } else {
        response = 'You have no notes yet.';
      }
    }

    displayMessage(response, 'steve');
  }
}
// Function to process user input and generate Steve's response
function askSteve() {
  const userInput = document.getElementById('user-input');  // Make sure the ID matches
  const question = userInput.value.trim();
  
  if (question) {
    // Display user message
    displayMessage(question, 'user');
    userInput.value = ''; // Clear input field

    let response = "Sorry, I didn’t understand that. Can you ask something else?";
// Match user query to tasks
    const matchingTask = tasks.find(task => question.includes(task.title.toLowerCase()));
    if (matchingTask) {
      response = `Here's the task you asked about:\nTitle: ${matchingTask.title}\nDescription: ${matchingTask.desc}`;
    }

    // Match user query to notes
    const matchingNote = notes.find(note => question.includes(note.title.toLowerCase()));
    if (matchingNote) {
      response = `Here's the note you asked about:\nTitle: ${matchingNote.title}\nDescription: ${matchingNote.desc}`;
    }

    // General queries
    if (!matchingTask && !matchingNote) {
      if (/tasks/i.test(question)) {
        response = tasks.length > 0 
          ? 'Here are your tasks:\n' + tasks.map(task => `${task.title}: ${task.desc}`).join('\n')
          : 'You have no tasks yet.';
      } else if (/notes/i.test(question)) {
        response = notes.length > 0 
          ? 'Here are your notes:\n' + notes.map(note => `${note.title}: ${note.desc}`).join('\n')
          : 'You have no notes yet.';
      }
    }
    
// Responses for tasks and notes
if (/tasks|to-do list/i.test(question)) {
  if (tasks.length > 0) {
    response = 'Here are your tasks:\n' + tasks.map(task => `${task.title}: ${task.desc}`).join('\n');
  } else {
    response = 'You have no tasks yet.';
  }
} else if (/notes/i.test(question)) {
  if (notes.length > 0) {
    response = 'Here are your notes:\n' + notes.map(note => `${note.title}: ${note.desc}`).join('\n');
  } else {
    response = 'You have no notes yet.';
  }
} else if (/add task/i.test(question)) {
  response = 'To add a task, go to your task list and click "Add Task". You can give your task a title and description.';
} else if (/add note/i.test(question)) {
  response = 'To add a note, go to your notes section and click "Add Note". You can write your note there.';
}

    // Display Steve's response
    displayMessage(response, 'steve');

    // Optionally speak the response
    speak(response);  // Ensure the speak function is defined correctly
  } else {
    // If no input is entered
    displayMessage("Please type something!", 'steve');
  }
}

// Function to display messages in the chat area
function displayMessage(message, sender) {
  const chatBox = document.getElementById('chat-box'); // Ensure the ID matches
  const messageElement = document.createElement('div');
  messageElement.className = sender;
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function for speaking the response
function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Get the list of available voices and set a constant voice
  const voices = synth.getVoices();
  const chosenVoice = voices.find(voice => voice.name.includes("Google Indian English Male")); // Example robotic voice
  utterance.voice = chosenVoice || voices[0];  // Default to first available voice if no match

  // Set speech properties (rate, pitch, etc.)
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.lang = 'en-US';  // Set language to US English

  // Speak the text
  synth.speak(utterance);
}
// script.js

// Function to handle asking Steve and processing the response
function askSteve() {
  const question = document.getElementById("user-input").value; // Get user input from the text box
  const response = getResponse(question); // Call getResponse() from scs.js to process the question
  speakResponse(response); // Use speech synthesis to speak the response
  displayResponse(response); // Display the response on the webpage
}

// Display the response in the chat box
function displayResponse(response) {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("div");
  message.classList.add("chat-message");
  message.textContent = response;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
}

// Use Web Speech API to speak the response
function speakResponse(response) {
  const speech = new SpeechSynthesisUtterance(response);
  speech.lang = "en-US"; // Set language to English
  window.speechSynthesis.speak(speech); // Speak the response
}

    // Handle specific queries for tasks and notes
    if (!matchingTask && !matchingNote) {
      if (/tasks/i.test(question)) {
        response = tasks.length > 0 
          ? 'Here are your tasks:\n' + tasks.map(task => `${task.title}: ${task.desc}`).join('\n')
          : 'You have no tasks yet.';
      } else if (/notes/i.test(question)) {
        response = notes.length > 0 
          ? 'Here are your notes:\n' + notes.map(note => `${note.title}: ${note.desc}`).join('\n')
          : 'You have no notes yet.';
      }
    }
 // Function to toggle the questions slide panel
function toggleQuestions() {
  const slidePanel = document.getElementById("questions-slide");
  if (slidePanel.style.display === "block") {
    slidePanel.style.display = "none";
  } else {
    slidePanel.style.display = "block";
    loadQuestions();
  }
}

// Function to load questions dynamically into the slide panel
function loadQuestions() {
  const questionsListElement = document.getElementById("questions-list");
  questionsListElement.innerHTML = ""; // Clear any existing questions

  // Loop through the questions and add them to the list
  questionsList.forEach(function(question) {
    const listItem = document.createElement("li");
    listItem.textContent = question;
    questionsListElement.appendChild(listItem);
  });
}
