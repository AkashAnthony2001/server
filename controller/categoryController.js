const category = require('../models/categoryModel')

//Showing All Book

const index = (req , res , next) => {
    category.find()
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

//Show Specific Category

const show = (req , res , next) => {
    let categoryID = req.body.categoryID;
    category.findById(categoryID)
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
    let newcategory = new category({
        categoryname: req.body.categoryname
    });
    newcategory.save()
    .then(response => {
        res.json({
            message:"Category Added Sucessfully"
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
    let categoryID = req.body.categoryID;

    let updatedData = {
        bookname: req.body.bookname,
        pages: req.body.pages,
        author: req.body.author
    }

    category.findByIdAndUpdate(categoryID, {$set : updatedData})
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
    let categoryID = req.body.categoryID;

    category.findByIdAndDelete(categoryID)
    .then(() => {
        res.json({
            message: "Category Deleted !"
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