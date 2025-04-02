// 🤖 AI Chatbot Logic
document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    // Predefined responses for the chatbot
    const responses = {
        "your name": "I'm your friendly AI chatbot! My job is to assist you.",
        "help": "I can answer basic questions. Try asking about biochemistry, science, or AI!",
        "joke": "Why don't scientists trust atoms? Because they make up everything! 😂",
        "hello": "Hello! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm always ready to help!",
        "what is biochemistry": "Biochemistry is the study of chemical processes within and relating to living organisms.",
        "what is ai": "AI stands for Artificial Intelligence, which enables machines to think and act like humans.",
        "who discovered penicillin": "Penicillin was discovered by Alexander Fleming in 1928.",
        "what is photosynthesis": "Photosynthesis is the process by which plants convert sunlight into chemical energy.",
        "what is the atomic number of carbon": "The atomic number of carbon is 6.",
        "how does DNA replicate": "DNA replication is the process by which a cell makes an exact copy of its DNA, involving enzymes like DNA polymerase.",
        "what is a protein": "A protein is a molecule made up of amino acids that performs various functions in the body, including catalyzing reactions, structural support, and immune defense.",
        "define enzyme": "An enzyme is a protein that speeds up a chemical reaction without being consumed by the reaction itself."
    };

    // Function to handle user message
    function sendMessage() {
        let userText = userInput.value.trim().toLowerCase(); // Get input & make lowercase

        if (userText === "") return; // Ignore empty input

        // Add user message to chat
        chatBox.innerHTML += `<p class="user-message"><strong>You:</strong> ${userInput.value}</p>`;

        // Provide bot's reply from predefined responses or default message
        let botReply = responses[userText] || "Sorry, I don't understand that yet. Try another question!";

        // Add bot message
        chatBox.innerHTML += `<p class="bot-message"><strong>Bot:</strong> ${botReply}</p>`;

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear input field
        userInput.value = "";
    }

    // Event listener for send button
    sendButton.addEventListener("click", sendMessage);

    // Press "Enter" to send message
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

// Modal Logic for Contact Form
var modal = document.getElementById("contactModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

// Open the modal when the user clicks the "Contact Us" button
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the user clicks the "x"
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}










