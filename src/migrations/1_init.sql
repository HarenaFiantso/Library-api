DROP DATABASE IF EXISTS library;
CREATE DATABASE library;

\c library

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE genre_enum AS ENUM ('Fiction', 'Non-Fiction', 'Science', 'Fantasy', 'Biography', 'History', 'Other');

CREATE TABLE book (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  published_year INT,
  genre genre_enum,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
