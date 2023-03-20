const mongoose = require('mongoose');


const recordsSchema = mongoose.Schema({
    uid: { type : String , required : true },
    bid: { type : Number , required : true },
    datetime: { type : String , required : true }
});

module.exports = mongoose.model('records' , recordsSchema);
