const mongoose = require('mongoose');


const booksSchema = mongoose.Schema({
    bookname: { type : String , required : true },
    pages: { type : Number , required : true },
    author: { type : String , required : true },
    category: { type : String , required : true },
    image: { type:String }
});

module.exports = mongoose.model('books' , booksSchema);
