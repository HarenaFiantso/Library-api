import express from 'express';
import { getBookById, getBooks } from '../controllers/book.controller.js';

const bookRoute = express.Router();

bookRoute.get('/', getBooks);
bookRoute.get('/:bookId', getBookById);

export default bookRoute;
