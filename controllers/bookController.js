const Book = require('../models/bookModel');


exports.createBook = async (req,res) => {
    const { title, author, genre, publishedYear, summary } = req.body;

    try{
        if (!title || typeof title !== 'string') return res.status(400).json({message: 'Title is required and title is string'});
        
        if (!author || typeof author !== 'string') return  res.status(400).json({message: 'Author is required and author is string'})
        
        if (!genre || typeof genre !== 'string') return  res.status(400).json({message: 'Genre is required and genre is string'})
        
        if (!publishedYear) return  res.status(400).json({message: 'Published Year is required'})

        if (typeof publishedYear !== 'number') return  res.status(400).json({message: 'Published Year must be a number'})

        if (publishedYear < 0) return res.status(400).json({message: 'Published Year must be a positive number'})

        const book = new Book({
            title,
            author,
            genre,
            publishedYear,
            summary
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

exports.getAllBooks = async (req,res) => {
    try{
        const books = await Book.find();
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
                }
            })
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Error getting books'
        })
    }
}

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
    if (title) bookUpdates.title = title;
    if (author) bookUpdates.author = author;
    if (genre) bookUpdates.genre = genre;
    if (publishedYear) bookUpdates.publishedYear = publishedYear;
    if (summary) bookUpdates.summary = summary;

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