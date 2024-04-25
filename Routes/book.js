const express = require('express');
const router = express.Router();
const auth = require('../utils/auth');
const Book = require('../Model/Book');

// Create a new book
router.post('/', auth, async (req, res) => {
  try {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      publicationYear: req.body.publicationYear
    });

    await book.save();

    res.status(201).json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update a book
router.put('/:id', auth, async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete a book
router.delete('/:id', auth, async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Filter books by author
router.get('/author/:author', async (req, res) => {
  try {
    const books = await Book.find({ author: req.params.author });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Filter books by publication year
router.get('/year/:year', async (req, res) => {
  try {
    const books = await Book.find({ publicationYear: req.params.year });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
