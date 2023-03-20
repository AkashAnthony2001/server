const mongoose = require('mongoose');


const categorySchema = mongoose.Schema({
    categoryname: { type : String , required : true }
});

module.exports = mongoose.model('category' , categorySchema);
