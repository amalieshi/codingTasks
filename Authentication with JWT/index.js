const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const PORT = 8000;

// Enable JSON parsing for incoming request bodies
app.use(express.json());

// User login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the username and password are correct
    if (username === 'zama' && password === 'secret') {
        // User payload for JWT
        const payload = {
            name: username,
            admin: true
        };
        // Generate the JWT
        const token = jwt.sign(payload, 'jwt-secret', { algorithm: 'HS256' });
        // Send the token in the response
        res.send({ token });
    } else {
        res.status(403).send({ error: 'Incorrect login!' });
    }
});

// Route to access a general resource, requiring a valid JWT for authentication
app.get('/resource', (req, res) => {
    const authHeader = req.headers['authorization'];
    let token;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    } else {
        token = authHeader;
    }

    if (!token) {
        return res.status(401).send({ error: 'Token missing!' });
    }

    try {
        const decoded = jwt.verify(token, 'jwt-secret');
        res.send({
            message: `Hello, ${decoded.name}! Your JSON Web Token has been verified.`
        });
    } catch (err) {
        res.status(401).send({ error: 'Invalid JWT!' });
    }
});

// Route to access an admin resource, requiring a valid JWT and admin privileges
app.get('/admin_resource', (req, res) => {
    const authHeader = req.headers['authorization'];
    let token;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    } else {
        token = authHeader;
    }

    if (!token) {
        return res.status(401).send({ error: 'Token missing!' });
    }

    try {
        const decoded = jwt.verify(token, 'jwt-secret');
        if (decoded.admin) {
            res.send({
                message: `Hello, ${decoded.name}! You have admin access.`
            });
        } else {
            res.status(403).send({ error: 'Admin access required!' });
        }
    } catch (err) {
        res.status(401).send({ error: 'Invalid JWT!' });
    }
});

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));