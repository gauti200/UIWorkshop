
const bookscontroller = require('../controllers/books');
const bookstall = require('express').Router();

//get to return us all the books
bookstall.get('/books', bookscontroller.getAllBooks);
bookstall.get('/books/:id', bookscontroller.getBooksById);

//exported to get it used by other memebers or any else module
module.exports = bookstall;