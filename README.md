
# 📚 Book Management API

This is a simple RESTful API built with Node.js for managing books in a library. It allows users to create and store book records.


## 📦  Cloning the Project

To clone the project, open your Git Bash and run:

```bash
cd Desktop/
``` 

- Then execute the following command:

```bash
git clone https://github.com/Natanael-Heinrick/API_BOOK_TRACKER.git
```

## 📦 Installing Dependencies

Still in Git Bash install all project dependencies, run:

```bash
npm install
```

### 🔐 Environment Configuration

This project uses environment variables to store sensitive information.

#### 📝 Step-by-step:

1. **Copy the example environment file:**

```bash
 cp .env.example and modify for .env
```

2. **Edit the .env file and update the MONGO_URI variable with your MongoDB connection string.**

```env
MONGO_URI=mongodb://localhost:27017/bookdb
```

Replace localhost and 27017 with your own host and port if necessary.

Example for a remote database:

```env
MONGO_URI=mongodb://your-host.com:12345/mydatabase
```

⚠️ Make sure your MongoDB server is running and accessible through the given URI.

## ✨ Features

- Create a new book entry with title, author, genre, published year, and summary.



## 📌 Link for Endpoints
<a name="return-to-links-page-book"></a>
- [Create a New Book](#create-a-new-book)
- [Show All Books](#get-all-cards)
- [Show Book by ID](#get-book-by-id)
- [Update Book by Id](#update-book-by-id)
- [Delete Book by Id](#delete-book-by-id)


### 🔹 POST `/books`
<a name="create-a-new-book"></a>
Creates a new book.

#### Request Body (JSON) ⚙️

```json


{
  "title": "O Nome do Vento",
  "author": "Patrick Rothfuss",
  "genre": "Fantasy",
  "publishedYear": 2007,
  "summary": "The story of Kvothe, a gifted musician and powerful magician."
}
```

### ✅ Response (200 OK)

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
- [Return to links endpoints book](#return-to-links-page-book)

### 🔹 GET `/books`
<a name="get-all-book"></a>
Retrieves a list of all books.

#### ✅ Response (200 OK)

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

- [Return to links endpoints book](#return-to-links-page-book)

### 🔹 GET `/books/:id`
<a name="get-book-by-id"></a>

Retrieves a book by its unique ID.

#### Request Parameters ⚙️

- `id` (string, required): The ID of the book to retrieve.

#### ✅ Response (200 OK)

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

#### ⚠️ Error Response (404 Not Found)


```json
{
    "message": "Book not found"
}
```

- [Return to links endpoints book](#return-to-links-page-book)

### 🔹 PATCH `/books/:id`
<a name="update-book-by-id"></a>

Updates a book by its unique ID.

#### Request Parameters ⚙️

- `id` (string, required): The ID of the book to update.

#### Request Body ⚙️

- `title` (string, optional): The title of the book.
- `author` (string, optional): The author of the book.
- `genre` (string, optional): The genre of the book.
- `publishedYear` (number, optional): The published year of the book.
- `summary` (string, optional): A brief summary of the book.

#### ✅ Response (200 OK)

```json
{
  "message": "Book updated successfully",
  "book": {
    "id": "60b8c0f7d6e4f12c4c8b4567",
    "title": "The Name of the Wind",
    "author": "Patrick Rothfuss",
    "genre": "Fantasy",
    "publishedYear": 2007,
    "summary": "The story of Kvothe, a gifted musician and powerful magician."
  }
}
```

#### ⚠️ Error Response (404 Not Found)


```json
{
    "message": "Book not found"
}
```

#### ⚠️ Error Response (500 Internal Server Error)

```json
{
  "message": "Error updating book"
}

```

- [Return to links endpoints book](#return-to-links-page-book)

### 🔹 DELETE `/books/:id`
<a name="delete-book-by-id"></a>

Deletes a book by its unique ID.

#### Request Parameters ⚙️

- `id` (string, required): The ID of the book to delete.

#### ✅ Response (200 OK)

```json
{
  "message": "Book deleted successfully"
}
```

#### ⚠️ Error Response (404 Not Found)


```json
{
    "message": "Book not found"
}
```

#### ⚠️ Error Response (500 Internal Server Error)

```json
{
  "message": "Error deleting book"
}

```
- [Return to links endpoints book](#return-to-links-page-book)