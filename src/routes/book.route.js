import express from 'express';

const bookRoute = express.Router();

bookRoute.get('/', (_req, res) => {
  const books = [
    {
      id: 'book_1',
      title: 'To kill a mocking bird',
      author: 'Harper Lee',
      isAvailable: false,
      publishedAt: '1960',
      genre: 'Fiction',
      description:
        'A classic novel about racial injustice and childhood innocence in the American South. Set in the fictional town of Maycomb, Alabama, during the 1930s, the story is told through the eyes of Scout Finch, a young girl whose father, Atticus Finch, is a lawyer defending a black man falsely accused of rape. The novel explores themes of moral growth, prejudice, and the loss of innocence.',
      isbn: '978-0-06-112008-4',
    },
  ];
  res.json(books);
});

export default bookRoute;
