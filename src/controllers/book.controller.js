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

export { getBooks, getBookById };
