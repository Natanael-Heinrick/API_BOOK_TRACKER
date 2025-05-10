
# Book Management API

This is a simple RESTful API built with Node.js for managing books in a library. It allows users to create and store book records.

## Features

- Create a new book entry with title, author, genre, published year, and summary.

## Endpoint

### POST `/books`

Creates a new book.

#### Request Body (JSON)

```json


{
  "title": "O Nome do Vento",
  "author": "Patrick Rothfuss",
  "genre": "Fantasy",
  "publishedYear": 2007,
  "summary": "The story of Kvothe, a gifted musician and powerful magician."
}
```

### Response

```json
{
  "message": "Book created successfully",
  "book": {
    "id": "60b8c0f7d6e4f12c4c8b4567",
    "title": "O Nome do Vento",
    "author": "Patrick Rothfuss",
    "genre": "Fantasy",
    "publishedYear": 2007,
    "summary": "The story of Kvothe, a gifted musician and powerful magician."
  }
}
```

### GET `/books`

Retrieves a list of all books.

#### Response (200 OK)

```json
{
  "message": "Books retrieved successfully",
  "books": [
    {
      "id": "60b8c0f7d6e4f12c4c8b4567",
      "title": "O Nome do Vento",
      "author": "Patrick Rothfuss",
      "genre": "Fantasy",
      "publishedYear": 2007,
      "summary": "The story of Kvothe, a gifted musician and powerful magician."
    },
    {
      "id": "60b8c0f7d6e4f12c4c8b4568",
      "title": "The Wise Man's Fear",
      "author": "Patrick Rothfuss",
      "genre": "Fantasy",
      "publishedYear": 2011,
      "summary": "The continuation of Kvothe's journey in the world of magic and power."
    }
  ]
}
```

### GET `/books/:id`

Retrieves a book by its unique ID.

#### Request Parameters

- `id` (string, required): The ID of the book to retrieve.

#### Response (200 OK)

```json
{
  "message": "Book retrieved successfully",
  "book": {
    "id": "60b8c0f7d6e4f12c4c8b4567",
    "title": "O Nome do Vento",
    "author": "Patrick Rothfuss",
    "genre": "Fantasy",
    "publishedYear": 2007,
    "summary": "The story of Kvothe, a gifted musician and powerful magician."
  }
}
```