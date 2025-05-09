const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connect = require('./db/connect');

const bookRoutes = require('./routes/bookRoutes');
app.use('/api', bookRoutes);


app.get('/', (req,res) => {
    res.json({ message: 'Welcome to the Book API :), to use the API, please use /api/books' });
})

connect().then(() => {
    app.listen(3000, () => console.log('Server is running on port 3000'));
}).catch((error) => {
    console.error('Error connecting to the database:', error);
});

