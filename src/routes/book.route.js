import express from 'express';
import {
  getBookById,
  getBooks,
  saveOrUpdateBook,
} from '../controllers/book.controller.js';

const bookRoute = express.Router();

bookRoute.get('/', getBooks);
bookRoute.get('/:bookId', getBookById);
bookRoute.put('/', saveOrUpdateBook);

export default bookRoute;
