const books = require('../models/booksModel')

//Showing All Book

const index = (req , res , next) => {
    books.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "Error !"
        })
    })
}

//Show Specific Book

const show = (req , res , next) => {
    let bookID = req.body.bookID;
    books.findById(bookID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:"Error"
        })
    })
}

//Store Book

 const store = (req , res , next) => {
    let newbook = new books({
        bookname: req.body.bookname,
        pages: req.body.pages,
        author: req.body.author
    });
    newbook.save()
    .then(response => {
        res.json({
            message:"Book Added Sucessfully"
        })
    })
    .catch(error => {
        res.json({
            message: "Error !"
        })
    })
}

//Update Book By Id

const update = (req , res , next) => {
    let bookID = req.body.bookID;

    let updatedData = {
        bookname: req.body.bookname,
        pages: req.body.pages,
        author: req.body.author
    }

    books.findByIdAndUpdate(bookID, {$set : updatedData})
    .then(response => {
        res.json({
            message:"Data Updated !"
        })
    })
    .catch(error =>{
        res.json({
            message:"Error !"
        })
    })
}

//Delete Book By Id

const destroy = (req , res , next) => {
    let bookID = req.body.bookID;

    books.findByIdAndDelete(bookID)
    .then(() => {
        res.json({
            message: "Book Deleted !"
        })
    })
    .catch(error => {
        req.json({
            message: "Error !"
        })
    })
}


module.exports = {
    index,show,store,update,destroy
}

