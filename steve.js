// Fetch stored tasks and notes
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const notes = JSON.parse(localStorage.getItem('notes')) || [];

// Chat box and input
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Display messages in the chat box
function displayMessage(message, sender = 'user') {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the latest message
}

// Process user input and respond
function askSteve() {
  const question = userInput.value.trim();
  if (question) {
    displayMessage(question, 'user');
    userInput.value = '';  // Clear input field

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
function setFaceExpression(expression) {
  const steveFace = document.getElementById('steve-face');
  steveFace.className = `steve-face ${expression}`;
}
