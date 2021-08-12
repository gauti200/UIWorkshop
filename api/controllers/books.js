
const { request, response } = require('express');
const db = require('../config/dbconfig');

// get all books 

const getAllBooks = (request, response) => {

    db.query(`select * from bookstall.books`, (err, res) => {
        if (err) {
            response.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    })
};

// getting book details by its id 
const getBooksById = (request, response) => {

    db.query(`select * from bookstall.books where book_id='${request.params.id}'`, (err, res) => {
        if (err) {
            response.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    })
};

module.exports = {
    getAllBooks,
    getBooksById
}