import express from 'express';
import {
  deleteBook,
  getBookById,
  getBooks,
  saveOrUpdateBook,
} from '../controllers/book.controller.js';

const bookRoute = express.Router();

bookRoute.get('/', getBooks);
bookRoute.get('/:bookId', getBookById);
bookRoute.put('/', saveOrUpdateBook);
bookRoute.delete('/:bookId', deleteBook);

export default bookRoute;
