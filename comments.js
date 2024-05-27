// Create web server
const express = require('express');
const app = express();
const path = require('path');

// Parse incoming request with JSON payloads
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import comments
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.json({ status: 'ok' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: comments.json
[
  {
    "username": "Alice",
    "comment": "Hello, World!"
  },
  {
    "username": "Bob",
    "comment": "Nice blog post!"
  }
]