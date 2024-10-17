const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

app.use(express.json());

// Chatbot logic
app.post('/message', (req, res) => {
    const userInput = req.body.message.toLowerCase();
    let botResponse = "";

    // Simple chatbot response using if-else
    if (userInput === "hello") {
        botResponse = "Hello! How can I help you?";
    } else if (userInput === "how are you?") {
        botResponse = "I'm just a bot, but I'm doing great! How about you?";
    } else if (userInput === "bye") {
        botResponse = "Goodbye! Have a nice day!";
    } else {
        botResponse = "Sorry, I don't understand that. Can you try something else?";
    }

    // Send the response back to the client
    res.json({ response: botResponse });
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    console.log('Server running on port http://localhost:${PORT}');
});
