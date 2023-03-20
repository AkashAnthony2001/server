const mongoose = require('mongoose');


const usersSchema = mongoose.Schema({
    firstname: { type : String , required : true },
    lastname: { type : String , required : true },
    email: { type : String , required : true },
    password: { type : String , required : true },
    confirmpassword: { type : String , required : true },
    phone: { type : Number , required : true },
    terms: { type :Boolean , required : true }
});

module.exports = mongoose.model('user' , usersSchema);
