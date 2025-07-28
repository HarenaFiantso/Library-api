import express from 'express';
import { getBooks } from '../controllers/book.controller.js';

const bookRoute = express.Router();

bookRoute.get('/', getBooks);

export default bookRoute;
