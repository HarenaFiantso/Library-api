import { db } from '../db.js';

const getBooks = async (_req, res) => {
  try {
    const { rows: books } = await db.query('SELECT * FROM book');
    res.status(200).json(books);
  } catch (error) {
    console.error('Error getting all books from database:', error);
    res.status(500).json({ error: 'Failed to retrieve books' });
  }
};

const getBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const { rows } = await db.query('SELECT * FROM book WHERE id = $1', [
      bookId,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error getting book by ID from database:', error);
    res.status(500).json({ error: 'Failed to retrieve book' });
  }
};

const saveOrUpdateBook = async (req, res) => {
  try {
    const { id, title, author, published_date, genre } = req.body;

    if (id) {
      const { rowCount } = await db.query(
        'UPDATE book SET title = $1, author = $2, published_date = $3, genre = $4 WHERE id = $5',
        [title, author, published_date, genre, id]
      );
      if (rowCount === 0) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(200).json({ message: 'Book updated successfully' });
    } else {
      const { rows } = await db.query(
        'INSERT INTO book (title, author, published_date, genre) VALUES ($1, $2, $3, $4) RETURNING *',
        [title, author, published_date, genre]
      );
      res.status(201).json(rows[0]);
    }
  } catch (error) {
    console.error('Error saving or updating book:', error);
    res.status(500).json({ error: 'Failed to save or update book' });
  }
};

export { getBooks, getBookById, saveOrUpdateBook };
