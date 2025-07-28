const getBooks = (_req, res) => {
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
    {
      id: 'book_2',
      title: '1984',
      author: 'George Orwell',
      isAvailable: true,
      publishedAt: '1949',
      genre: 'Dystopian',
      description:
        'A dystopian novel set in a totalitarian society ruled by Big Brother. The story follows Winston Smith, a man struggling to maintain his individuality and sanity in a world of constant surveillance, propaganda, and repression.',
      isbn: '978-0-452-28423-4',
    },
  ];
  res.json(books);
};

export { getBooks };
