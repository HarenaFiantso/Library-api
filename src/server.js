import express from 'express';
import dotenv from 'dotenv';
import bookRoute from './routes/book.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/books', bookRoute);

app.get('/ping', (_req, res) => {
  res.status(200).send('pong');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
