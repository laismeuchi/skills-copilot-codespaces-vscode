// Create web server
// Create a route that accepts POST requests to /comments
// Create a route that accepts GET requests to /comments
// Create a route that accepts GET requests to /comments/:id
// Create a route that accepts PUT requests to /comments/:id
// Create a route that accepts DELETE requests to /comments/:id
// Create a route that accepts POST requests to /comments/:id/flag
// Create a route that accepts GET requests to /comments/:id/flag
// Create a route that accepts DELETE requests to /comments/:id/flag
// Create a route that accepts POST requests to /comments/:id/like
// Create a route that accepts GET requests to /comments/:id/like
// Create a route that accepts DELETE requests to /comments/:id/like
// Create a route that accepts POST requests to /comments/:id/dislike
// Create a route that accepts GET requests to /comments/:id/dislike
// Create a route that accepts DELETE requests to /comments/:id/dislike

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let comments = [
  { id: 1, comment: 'comment1' },
  { id: 2, comment: 'comment2' },
  { id: 3, comment: 'comment3' }
];

app.post('/comments', (req, res) => {
  const { id, comment } = req.body;
  comments.push({ id, comment });
  res.status(201).send({ id, comment });
});

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('Comment not found');
  }
  res.send(comment);
});

app.put('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('Comment not found');
  }
  const { id, comment: newComment } = req.body;
  comment.comment = newComment;
  res.send(comment);
});

app.delete('/comments/:id', (req, res) => {
  const comment = comments.find(comment