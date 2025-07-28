import express from 'express';
import dotenv from 'dotenv';
import { pool } from './db.js';
import bookRoute from './routes/book.route.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const createServer = () => {
  const app = express();

  app.use(express.json());

  app.use('/api/books', bookRoute);

  app.get('/ping', (_req, res) => {
    res.status(200).send('pong');
  });

  return app;
};

const startServer = async () => {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL database');

    const app = createServer();
    app.set('db', pool);

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to PostgreSQL database:', err);
    process.exit(1);
  }
};

startServer();
