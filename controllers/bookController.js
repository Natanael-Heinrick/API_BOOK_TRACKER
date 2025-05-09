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