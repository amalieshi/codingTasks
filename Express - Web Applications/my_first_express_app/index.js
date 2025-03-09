const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to display welcome message with name from person.json
app.get('/', (req, res) => {
    fs.readFile('person.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading person.json');
            return;
        }
        const person = JSON.parse(data);
        res.send(`Welcome, ${person.name}`);
    });
});

// Route to display about.html
app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Route to display contact_us.html
app.get('/contact_us.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact_us.html'));
});

// Catch-all route for unknown paths
app.use((req, res) => {
    res.status(404).send("Sorry! Can’t find that resource. Please check your URL");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});