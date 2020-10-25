const express = require("express");
const {uuid} = require("uuidv4");

const app = express();

app.use(express.json());

const books = [];

app.get("/books", (req, res) => {
  return res.json(books);
});

app.post("/books", (req, res) => {
  const { title, author, genre } = req.body;

  const book = {
    id: uuid(),
    title,
    author,
    genre,
    likes: 0,
  };

  books.push(book);

  return res.json(books);
});

app.put("/books/:id", (req, res) => {
  const { title, author, genre } = req.body;
  const { id } = req.params;

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex < 0) {
    return res.status(400).json({ message: "We can't find your book 👎 " });
  }

  const book = { id, title, author, genre };

  books[bookIndex] = book;

  return res.json({ message: "Book sucessfully edited! 👍" });
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex < 0) {
    return res.status(400).json({ message: "We can't find your book 👎" });
  }

  books.splice(bookIndex, 1);

  return res.json({ message: "Book sucessfully deleted! 👍" });
});

app.post("/books/:id/like", (req, res) => {
  const { id } = req.params;

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(400).json({ message: "We didn't find your book 👎" });
  }

  book.likes++;

  return res.json({ message: "You liked this book 👍" });
});

module.exports = app;