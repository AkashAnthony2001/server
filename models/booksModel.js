const mongoose = require('mongoose');


const booksSchema = mongoose.Schema({
    bookname: { type : String , required : true },
    pages: { type : Number , required : true },
    author: { type : String , required : true },
    image: { type:String , required : true }
});

module.exports = mongoose.model('books' , booksSchema);
