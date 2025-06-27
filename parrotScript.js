// Simple parrot chatbot implementation used by indexParrot.html
// The chatbot object
const chatbot = {
    name: "Parrot",
    reply: function (question) {
        // Copy the user input and alternate between lowercase and uppercase characters before ending with "!!!".
        let response = "";
        for (let i = 0; i < question.length; i++) {
            response += Math.random() < 0.5 ?
                question[i].toUpperCase() :
                question[i].toLowerCase();
        }
        return response + "!!!";
    }
};

// Get references to the input and output elements
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");

// Reference to the "Send" button
const sendBtn = document.querySelector('.send-button');

// Automatically scroll to the bottom of the chatbot
const chatbotContainer = document.getElementById("chatbot-container");

// Add an event listener to the input element to listen for user input
inputEl.addEventListener("keydown", function (event) {
    // If the user presses the Enter key, get the user's input and generate a response
    if (event.keyCode === 13) {
        sendMessage();
    }
});

// Add an event listener to the send button
sendBtn.addEventListener("click", function () {
    sendMessage();
});

function sendMessage() {
    // Trim the user's input to remove surrounding whitespace
    const userInput = inputEl.value.trim();

    // If the user's input is empty, return without sending the message
    if (!userInput) {
        return;
    }

    // Clear the input element
    inputEl.value = "";

    // Create paragraph element for the user's message
    const userMsg = document.createElement('p');
    userMsg.innerHTML = `<strong class='blue-text'>You:</strong> ${userInput}`;
    outputEl.appendChild(userMsg);

    // Create a placeholder for Parrot's response
    const parrotMsg = document.createElement('p');
    parrotMsg.innerHTML = "<strong>Parrot:</strong> Parrot is typing...";
    outputEl.appendChild(parrotMsg);

    // Scroll to the bottom of the chatbot container
    chatbotContainer.scrollTop = chatbotContainer.scrollHeight;

    // Delay for 1 second before generating the chatbot's response
    setTimeout(() => {
        // Generate a response from the chatbot
        const chatbotResponse = chatbot.reply(userInput);

        // Update the placeholder with the chatbot's response
        parrotMsg.innerHTML = `<strong>Parrot:</strong> ${chatbotResponse}`;

        // Scroll to the bottom of the chatbot container
        chatbotContainer.scrollTop = chatbotContainer.scrollHeight;
    }, 1000);
}

// Open pop-up form
function openForm() {
    document.getElementById("chatbotForm").style.display = "block";
}

// Close pop-up form
function closeForm() {
    document.getElementById("chatbotForm").style.display = "none";
}

// close if Esc is pressed on the keyboard
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        closeForm();
    }
});