const users = require('../models/usersModel')

//Showing All Book

const index = (req , res , next) => {
    users.find()
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
    let userID = req.body.userID;
    users.findById(userID)
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
    
    let newuser = new users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        phone: req.body.phone,
        terms: req.body.terms
    });
    newuser.save()
    .then(response => {
        res.json({
            data:true,
            message:"Registered Sucessfully"
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
    let userID = req.body.userID;

    let updatedData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phno: req.body.phno
    }

    users.findByIdAndUpdate(userID, {$set : updatedData})
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


//Update Book By Id

const isExist = (req , res , next) => {
    users.find({ email: req.body.email , password: req.body.password } )
    
    .then(response => {
        if(response.length > 0){
            res.json({
                data:true,
                message:"Successfully Logged In !",
                response
            })
        }else{
            res.json({
                data:false,
                status:false,
                message:"Invalid Credentials !"
            })
        }
    })
    .catch(error =>{
        res.json({
            message:"Error !"
        })
    })
}


//Delete Book By Id

const destroy = (req , res , next) => {
    let userID = req.params._id;
console.log(res);
    users.findByIdAndRemove(userID)
    .then(() => {
        res.json({
            message: "User Deleted !"
        })
    })
    .catch(error => {
        req.json({
            message: "Error !"
        })
    })
}


const checkUser = 

module.exports = {
    index,show,store,update,destroy,isExist
}