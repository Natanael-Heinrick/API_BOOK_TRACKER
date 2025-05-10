const Book = require('../models/bookModel');
const { isValidString, isValidNumber } = require('../utils/validate');


exports.createBook = async (req,res) => {
    const { title, author, genre, publishedYear, summary } = req.body;

    try{
        if (!isValidString(title)) {
            return res.status(400).json({ message: 'Title is required and must be a non-empty string' });
          }
      
          if (!isValidString(author)) {
            return res.status(400).json({ message: 'Author is required and must be a non-empty string' });
          }
      
          if (!isValidString(genre)) {
            return res.status(400).json({ message: 'Genre is required and must be a non-empty string' });
          }
      
          if (!isValidNumber(publishedYear)) {
            return res.status(400).json({ message: 'Published Year is required and must be a non-empty integer' });
          }

          if (publishedYear < 0) {
            return res.status(400).json({ message: 'Published Year must be a positive integer' });
          }


        const book = new Book({
            title: title.trim(),
            author: author.trim(),
            genre: genre.trim(),
            publishedYear,
            summary: summary?.trim() || null,
        });

        await book.save();
        res.status(201).json({
            message: 'Book created successfully',
            book: {
                id: book._id,
                title: book.title,
                author: book.author,
                genre: book.genre,
                publishedYear: book.publishedYear,
                summary: book.summary
            }
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Error creating boook',
        })
    }
}

exports.getAllBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 10; 
        
        const skip = (page - 1) * limit;

        const books = await Book.find()
            .skip(skip)
            .limit(limit);

        const totalBooks = await Book.countDocuments();

        const totalPages = Math.ceil(totalBooks / limit);

        res.status(200).json({
            message: 'Books retrieved successfully',
            books: books.map(book => {
                return {
                    id: book._id,
                    title: book.title,
                    author: book.author,
                    genre: book.genre,
                    publishedYear: book.publishedYear,
                    summary: book.summary
                };
            }),
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalBooks: totalBooks,
                booksPerPage: limit
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error getting books'
        });
    }
};

exports.getBookById = async (req,res) => {
    const {id} = req.params;
    try{
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({message: 'Book not found'});

        res.status(200).json({
            message: 'Book retrieved successfully',
            book: {
                id: book._id,
                title: book.title,
                author: book.author,
                genre: book.genre,
                publishedYear: book.publishedYear,
                summary: book.summary
            }
        })
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Error getting book'
        })
    }
}

exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, genre, publishedYear, summary } = req.body;

    const bookUpdates = {};
    if (isValidString(title)) bookUpdates.title = title;
    if (isValidString(author)) bookUpdates.author = author;
    if (isValidString(genre)) bookUpdates.genre = genre;
    if (isValidNumber(publishedYear)) bookUpdates.publishedYear = publishedYear;
    if (isValidString(summary)) bookUpdates.summary = summary;

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, bookUpdates, { new: true });
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

        res.status(200).json({
            message: 'Book updated successfully',
            book: {
                id: updatedBook._id,
                title: updatedBook.title,
                author: updatedBook.author,
                genre: updatedBook.genre,
                publishedYear: updatedBook.publishedYear,
                summary: updatedBook.summary
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating book' });
    }
}

exports.deleteBook = async (req,res) => {
    const {id} = req.params;
    try{

        const deleteBook = await Book.findByIdAndDelete(id);
        if (!deleteBook) return res.status(404).json({message: 'Book not found'});
        res.status(200).json({
            message: 'Book deleted successfully',
        })
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Error deleting book'
        })
    }
}

