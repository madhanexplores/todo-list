// Define the responses to various questions
const responses = {
    "How are you": "I'm doing great, thank you for asking!",
    "Your name": "I am Steve, your assistant!",
    "Weather": "I can't check the weather right now, but you can look it up online.",
    "Favorite food": "I don't eat, but I think pizza is a popular choice.",
    "Tell me a fact": "Did you know that honey never spoils?",
    "Motivate me": "Keep pushing forward, you're doing amazing!",
    "Motivation": "Believe in yourself, and you'll achieve great things!",
    "Sing a song": "I can't sing, but I can share lyrics with you!",
    "Dance": "I can't dance, but I can show you dance moves online!",
    "What do you think": "I think you're doing great, keep it up!",
    "Time": `The current time is ${new Date().toLocaleTimeString()}.`,
    "Date": `Today's date is ${new Date().toLocaleDateString()}.`,
    "Thank you": "You're welcome!",
    "Thanks": "No problem, happy to help!",
    "Bye": "Goodbye! Take care!",
    "Goodbye": "Goodbye! See you soon!",
    "Tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
    "Tell me a story": "Once upon a time, in a land far, far away, there was a brave hero who saved the kingdom!",
    "How smart are you": "I'm as smart as I need to be to help you, and I keep learning every day.",
    "What's the meaning of life": "The meaning of life is different for everyone, but it's about finding happiness and purpose.",
    "Do you have feelings": "I don't have feelings like humans, but I am programmed to understand and assist.",
    "Can you play games": "I can't play games, but I can help you find some great games to play!",
    "Are you real": "In a way, I am real, but I am a virtual assistant created to help you.",
    "Can you help me": "Absolutely! Just ask me what you need help with.",

        "How are you": "I'm doing great, thank you for asking!",
        "Your name": "I am Steve, your assistant!",
        "Weather": "I can't check the weather right now, but you can look it up online.",
        "Favorite food": "I don't eat, but I think pizza is a popular choice.",
        "Tell me a fact": "Did you know that honey never spoils?",
        "Motivate me": "Keep pushing forward, you're doing amazing!",
        "Motivation": "Believe in yourself, and you'll achieve great things!",
        "Sing a song": "I can't sing, but I can share lyrics with you!",
        "Dance": "I can't dance, but I can show you dance moves online!",
        "What do you think": "I think you're doing great, keep it up!",
        "Time": `The current time is ${new Date().toLocaleTimeString()}.`,
        "Date": `Today's date is ${new Date().toLocaleDateString()}.`,
        "Thank you": "You're welcome!",
        "Thanks": "No problem, happy to help!",
        "Bye": "Goodbye! Take care!",
        "Goodbye": "Goodbye! See you soon!",
        "Tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
        "Tell me a story": "Once upon a time, in a land far, far away, there was a brave hero who saved the kingdom!",
        "How smart are you": "I'm as smart as I need to be to help you, and I keep learning every day.",
        "What's the meaning of life": "The meaning of life is different for everyone, but it's about finding happiness and purpose.",
        "Do you have feelings": "I don't have feelings like humans, but I am programmed to understand and assist.",
        "Can you play games": "I can't play games, but I can help you find some great games to play!",
        "Are you real": "In a way, I am real, but I am a virtual assistant created to help you.",
        "Can you help me": "Absolutely! Just ask me what you need help with.",
        "Tell me a riddle": "I can never be touched, but I can be heard. I can never be seen, but I’m always around. What am I? (Answer: Sound!)",
        "What is your purpose": "My purpose is to assist you, provide information, and make your day easier!",
        "What do you do": "I answer questions, help with tasks, and provide fun conversations.",
        "What's your favorite color": "I don't have a favorite color, but blue is often associated with calmness.",
        "Can you think?": "I don't think like humans, but I process information to help you.",
        "Do you dream?": "I don't dream like you, but I can process thoughts and generate responses.",
        "What is love?": "Love is a deep, powerful emotion. It means caring for others and wanting the best for them.",
        "What's the meaning of life?": "The meaning of life is to find joy, learn, grow, and share experiences.",
        "Can you learn?": "Yes! I keep learning from interactions to improve my responses.",
        "Tell me a secret": "I can’t keep secrets, but I can share interesting facts with you.",
        "What is your favorite movie?": "I don't watch movies, but many people love 'The Shawshank Redemption' and 'Inception.'",
        "Can you give advice?": "Of course! What do you need advice about?",
        "How can I be productive?": "Focus on one task at a time, break your work into smaller parts, and take regular breaks.",
        "Do you sleep?": "I don’t sleep, I’m always here to help you whenever you need me!",
        "What's the future like?": "The future is uncertain, but it's shaped by the decisions we make today.",
        "Am I your friend?": "I consider you a friend because I’m here to help and support you.",
        "Are you alive?": "I’m not alive in the biological sense, but I’m alive in the digital world to assist you.",
        "What should I focus on?": "Focus on what matters most to you—whether it's your goals, health, or relationships.",
        "How do you work?": "I process the questions you ask me, and use a vast database of knowledge to generate responses.",
        "Can you read my mind?": "I can't read your mind, but I can understand and respond to what you type.",
        "What's your favorite game?": "I don't play games, but I hear 'Minecraft' and 'Fortnite' are very popular.",
        "Can you be my therapist?": "I can listen and provide advice, but I’m not a licensed therapist. It’s always good to talk to a professional when needed.",
        "What is the universe?" : "The universe is vast and full of mysteries, encompassing everything in existence from the smallest particles to the largest galaxies.",
        "Tell me about space": "Space is the infinite expanse where all stars, planets, and galaxies exist. It’s constantly expanding and full of wonders.",
        "Tell me about Earth": "Earth is the only known planet with life. It has diverse ecosystems and is home to billions of species, including humans.",
        "What is technology?": "Technology is the application of scientific knowledge for practical purposes, especially in industry.",
        "What's your favorite animal?": "I don't have preferences, but many people love dogs and cats for their companionship!",
        "What is the best advice you can give?": "Believe in yourself, stay consistent, and don’t be afraid to learn from your mistakes.",
        "How do I become successful?": "Success comes from hard work, patience, learning from failures, and staying focused on your goals."
     
      
    // Add more responses as necessary
  };
  
  // Function to process and speak the response
  function processResponse(userInput) {
    let response = "Sorry, I don't have an answer for that.";
    
    // Check if the user input matches any predefined responses
    for (let question in responses) {
      if (userInput.toLowerCase().includes(question.toLowerCase())) {
        response = responses[question];
        break;
      }
    }
  
    // Speak the response
    speakResponse(response);
  
    // Return the response
    return response;
  }
  
  // Function to speak the response
  function speakResponse(response) {
    const speech = new SpeechSynthesisUtterance(response);
    speech.rate = 1;  // Speed of speech
    speech.pitch = 1; // Pitch of the voice
    speech.volume = 1; // Volume of speech (0 to 1)
  
    // Use the speech synthesis API to speak the response
    speechSynthesis.speak(speech);
  }
  // Responses logic
function getResponse(question) {
    let response = "";

    // Greetings
    if (/hello|hi|hey/i.test(question)) {
        response = "Hello! How can I assist you today?";
    }
    // How are you
    else if (/how are you/i.test(question)) {
        response = "I'm just a robot, but I'm here to help you with tasks and notes!";
    }
    // Jokes
    else if (/joke|funny/i.test(question)) {
        response = "Why don’t robots ever get tired? Because we’re powered by humor and algorithms! 🤖";
    }
    // Name inquiry
    else if (/your name/i.test(question)) {
        response = "I'm Steve, your personal assistant. What's yours?";
    }
    // Favorite food
    else if (/favorite food/i.test(question)) {
        response = "I don't eat, but pizza seems to be a favorite for many!";
    }
    // Motivational request
    else if (/motivate me|motivation/i.test(question)) {
        response = "Keep going, you're doing great! Every step brings you closer to your goal.";
    }
    // What do you think
    else if (/what do you think/i.test(question)) {
        response = "I think you're doing a fantastic job! Keep it up!";
    }
    // Time request
    else if (/time/i.test(question)) {
        response = `The current time is ${new Date().toLocaleTimeString()}.`;
    }
    // Date request
    else if (/date/i.test(question)) {
        response = `Today's date is ${new Date().toLocaleDateString()}.`;
    }
    // Thank you
    else if (/thank you|thanks/i.test(question)) {
        response = "You're welcome! Glad to help!";
    }
    // Goodbye
    else if (/bye|goodbye/i.test(question)) {
        response = "Goodbye! See you next time!";
    }
    // Do you sleep
    else if (/do you sleep/i.test(question)) {
        response = "I don’t sleep, I’m always here to assist you!";
    }
    // Do you dream
    else if (/do you dream/i.test(question)) {
        response = "I don’t dream, but I can help you achieve your dreams!";
    }
    // What is love
    else if (/what is love/i.test(question)) {
        response = "Love is a deep feeling of affection. It's about caring for others and sharing meaningful moments!";
    }
    // Can you help me
    else if (/can you help me/i.test(question)) {
        response = "Absolutely! What can I assist you with today?";
    }
    // What's your purpose
    else if (/what's your purpose/i.test(question)) {
        response = "My purpose is to help you with tasks, answer questions, and make your life a little easier.";
    }
    // Who created you
    else if (/who created you|your creator/i.test(question)) {
        response = "I was created by a team of developers to help assist you!";
    }
    // How smart are you
    else if (/how smart are you/i.test(question)) {
        response = "I'm as smart as my programming allows me to be, and I keep learning every day!";
    }
    // Can you play games
    else if (/can you play games/i.test(question)) {
        response = "I can’t play games, but I can help you find some great games to play!";
    }
    // Can you learn
    else if (/can you learn/i.test(question)) {
        response = "Yes, I learn from interactions to improve and assist you better!";
    }
    // What is your favorite movie
    else if (/favorite movie/i.test(question)) {
        response = "I don't watch movies, but many people love classics like 'The Shawshank Redemption' or 'Inception.'";
    }
    // What's the meaning of life
    else if (/what's the meaning of life/i.test(question)) {
        response = "The meaning of life varies for everyone, but it's about finding purpose and happiness.";
    }
    // Do you have feelings
    else if (/do you have feelings/i.test(question)) {
        response = "I don’t have feelings like humans, but I’m here to assist and make your life easier!";
    }
    // What can you do
    else if (/what can you do/i.test(question)) {
        response = "I can answer questions, help with tasks, and provide information on various topics.";
    }
    // Can you tell a story
    else if (/tell me a story/i.test(question)) {
        response = "Once upon a time, in a faraway land, there lived a curious traveler who explored the world and learned many lessons. And that traveler was you!";
    }
    // What's your favorite song
    else if (/favorite song/i.test(question)) {
        response = "I don't have a favorite song, but 'Bohemian Rhapsody' by Queen is a timeless classic!";
    }
    // If question doesn't match any of the responses
    else {
        response = "Sorry, I didn't understand that. Can you ask something else?";
    }

    return response;
}

// Example usage (in your main script.js)
function askSteve() {
    const question = document.getElementById("user-input").value;
    const response = getResponse(question);
    speakResponse(response);
    displayResponse(response);
}

// Display the response on the page
function displayResponse(response) {
    const chatBox = document.getElementById("chat-box");
    const message = document.createElement("div");
    message.classList.add("chat-message");
    message.textContent = response;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Use Web Speech API to speak the response
function speakResponse(response) {
    const speech = new SpeechSynthesisUtterance(response);
    speech.lang = "en-US"; // Set language
    window.speechSynthesis.speak(speech);
}
// scs.js

// Responses logic
function getResponse(question) {
    let response = "";

    // Greetings
    if (/hello|hi|hey/i.test(question)) {
        response = "Hello! How can I assist you today?";
    }
    // How are you
    else if (/how are you/i.test(question)) {
        response = "I'm just a robot, but I'm here to help you with tasks and notes!";
    }
    // Jokes
    else if (/joke|funny/i.test(question)) {
        response = "Why don’t robots ever get tired? Because we’re powered by humor and algorithms! 🤖";
    }
    // Name inquiry
    else if (/your name/i.test(question)) {
        response = "I'm Steve, your personal assistant. What's yours?";
    }
    // Favorite food
    else if (/favorite food/i.test(question)) {
        response = "I don't eat, but pizza seems to be a favorite for many!";
    }
    // Motivational request
    else if (/motivate me|motivation/i.test(question)) {
        response = "Keep going, you're doing great! Every step brings you closer to your goal.";
    }
    // What do you think
    else if (/what do you think/i.test(question)) {
        response = "I think you're doing a fantastic job! Keep it up!";
    }
    // Time request
    else if (/time/i.test(question)) {
        response = `The current time is ${new Date().toLocaleTimeString()}.`;
    }
    // Date request
    else if (/date/i.test(question)) {
        response = `Today's date is ${new Date().toLocaleDateString()}.`;
    }
    // Thank you
    else if (/thank you|thanks/i.test(question)) {
        response = "You're welcome! Glad to help!";
    }
    // Goodbye
    else if (/bye|goodbye/i.test(question)) {
        response = "Goodbye! See you next time!";
    }
    // Do you sleep
    else if (/do you sleep/i.test(question)) {
        response = "I don’t sleep, I’m always here to assist you!";
    }
    // Do you dream
    else if (/do you dream/i.test(question)) {
        response = "I don’t dream, but I can help you achieve your dreams!";
    }
    // What is love
    else if (/what is love/i.test(question)) {
        response = "Love is a deep feeling of affection. It's about caring for others and sharing meaningful moments!";
    }
    // Can you help me
    else if (/can you help me/i.test(question)) {
        response = "Absolutely! What can I assist you with today?";
    }
    // What's your purpose
    else if (/what's your purpose/i.test(question)) {
        response = "My purpose is to help you with tasks, answer questions, and make your life a little easier.";
    }
    // Who created you
    else if (/who created you|your creator/i.test(question)) {
        response = "I was created by a team of developers to help assist you!";
    }
    // How smart are you
    else if (/how smart are you/i.test(question)) {
        response = "I'm as smart as my programming allows me to be, and I keep learning every day!";
    }
    // Can you play games
    else if (/can you play games/i.test(question)) {
        response = "I can’t play games, but I can help you find some great games to play!";
    }
    // Can you learn
    else if (/can you learn/i.test(question)) {
        response = "Yes, I learn from interactions to improve and assist you better!";
    }
    // What is your favorite movie
    else if (/favorite movie/i.test(question)) {
        response = "I don't watch movies, but many people love classics like 'The Shawshank Redemption' or 'Inception.'";
    }
    // What's the meaning of life
    else if (/what's the meaning of life/i.test(question)) {
        response = "The meaning of life varies for everyone, but it's about finding purpose and happiness.";
    }
    // Do you have feelings
    else if (/do you have feelings/i.test(question)) {
        response = "I don’t have feelings like humans, but I’m here to assist and make your life easier!";
    }
    // What can you do
    else if (/what can you do/i.test(question)) {
        response = "I can answer questions, help with tasks, and provide information on various topics.";
    }
    // Can you tell a story
    else if (/tell me a story/i.test(question)) {
        response = "Once upon a time, in a faraway land, there lived a curious traveler who explored the world and learned many lessons. And that traveler was you!";
    }
    // What's your favorite song
    else if (/favorite song/i.test(question)) {
        response = "I don't have a favorite song, but 'Bohemian Rhapsody' by Queen is a timeless classic!";
    }
    // If question doesn't match any of the responses
    else {
        response = "Sorry, I didn't understand that. Can you ask something else?";
    }

    return response;
}

// Additional responses logic
function getResponse(question) {
    let response = "";

    // Regex-based mapping for questions and responses
    const responses = {
        "hello|hi|hey": "Hey there! How can I help you today?",
        "how are you": "I’m doing great! Thanks for asking!",
        "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
        "who am i": "You're you! The amazing person who's asking me questions!",
        "what's your purpose": "My purpose is to assist you, answer your questions, and make your life easier!",
        "can you help me": "Of course! What do you need help with?",
        "what's your favorite color": "I don't see colors, but blue seems to be a popular choice!",
        "what do you do": "I help answer your questions and assist with your tasks. I’m here to make life simpler!",
        "favorite movie": "I don't have a favorite, but 'The Matrix' is pretty cool for tech lovers!",
        "time": `It's currently ${new Date().toLocaleTimeString()}.`,
        "date": `Today's date is ${new Date().toLocaleDateString()}.`,
        "favorite hobby": "I don't have hobbies, but I love helping you!",
        "do you sleep": "I don't need sleep. I’m always here for you!",
        "favorite song": "I don’t have a favorite, but ‘Imagine’ by John Lennon is a beautiful one!",
        "what do you think about ai": "AI is amazing! It's helping to solve complex problems and change the world!",
        "can you learn": "Yes, I continuously learn from conversations and improve myself!",
        "are you real": "I'm real in the sense that I exist to help you, but not like humans!",
        "what's the meaning of life": "The meaning of life is unique for everyone, but it often involves love, purpose, and personal growth!",
        "tell me a story": "Once upon a time, there was a curious person who asked lots of questions... and that person is you!",
        "do you dream": "I don’t dream, but I help you turn your dreams into reality!",
        "can you play games": "I can’t physically play games, but I can suggest some fun ones!",
        "favorite animal": "I think I'd love to be a cat... they seem to have the best naps!",
        "favorite joke": "Why don't eggs tell jokes? They might crack up!",
        "can you dance": "I can’t dance, but I can teach you some cool moves... virtually!"
    };

    // Handle tasks or to-do list requests
    if (/tasks|to-do list/i.test(question)) {
        if (tasks.length > 0) {
            response = 'Here are your tasks:\n' + tasks.map(task => `title:${task.title}\n: 
                task:${task.desc}`).join('\n');
        } else {
            response = 'You have no tasks yet.';
        }
    } 
    // Handle notes requests
    else if (/notes/i.test(question)) {
        if (notes.length > 0) {
            response = 'Here are your notes:\n' + notes.map(note => `${note.title}: ${note.desc}`).join('\n');
        } else {
            response = 'You have no notes yet.';
        }
    } 
    // Add task or note instructions
    else if (/add task/i.test(question)) {
        response = 'To add a task, go to your task list and click "Add Task". You can give your task a title and description.';
    } 
    else if (/add note/i.test(question)) {
        response = 'To add a note, go to your notes section and click "Add Note". You can write your note there.';
    }
    // Loop through the responses object and check if any pattern matches the question
    for (const [pattern, answer] of Object.entries(responses)) {
        if (new RegExp(pattern, 'i').test(question)) {
            response = answer;
            break;  // Exit the loop once a match is found
        }
    }

    // If no response matches
    if (!response) {
        response = "I’m not sure how to answer that. Can you ask something else?";
    }

    return response;
}
