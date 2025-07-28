import { db } from "../db.js";

const getBooks = async (_req, res) => {
  try {
    const { rows: books } = await db.query("SELECT * FROM book");
    res.status(200).json(books);
  } catch (error) {
    console.error("Error getting all books from database:", error);
    res.status(500).json({ error: "Failed to retrieve books" });
  }
};

export { getBooks };
