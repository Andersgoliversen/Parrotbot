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

// automatically scroll to the bottom of the chatbot
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
    // Get the user's input
    const userInput = inputEl.value;

    // If the user's input is empty, return without sending the message
    if (!userInput) {
        return;
    }

    // Clear the input element
    inputEl.value = "";

    // Append the user's input to the output element
    outputEl.innerHTML += "<p><strong class='blue-text'>You:</strong> " + userInput + "</p>";

    // Append the "Parrot is typing" message
    outputEl.innerHTML += "<p><strong>Parrot:</strong> Parrot is typing...</p>";

    // Scroll to the bottom of the chatbot container
    chatbotContainer.scrollTop = chatbotContainer.scrollHeight;

    // Delay for 2 seconds before generating the chatbot's response
    setTimeout(() => {
        // Generate a response from the chatbot
        const chatbotResponse = chatbot.reply(userInput);

        // Replace the "Parrot is typing" message with the chatbot's response
        outputEl.innerHTML = outputEl.innerHTML.replace("<p><strong>Parrot:</strong> Parrot is typing...</p>", "<p><strong>Parrot:</strong> " + chatbotResponse + "</p>");


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