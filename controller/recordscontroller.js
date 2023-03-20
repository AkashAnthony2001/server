const records = require('../models/recordsModel')

//Showing All Book

const index = (req , res , next) => {
    records.find()
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
    let recordID = req.body.recordID;
    records.findById(recordID)
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
    let newrecord = new records({
        uid: req.body.uid,
        bid: req.body.bid,
        datetime: req.body.datetime
    });
    newrecord.save()
    .then(response => {
        res.json({
            message:"Record Added Sucessfully"
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
    let recordID = req.body.recordID;

    let updatedData = {
        uid: req.body.uid,
        bid: req.body.bid,
        datetime: req.body.datetime
    }
    records.findByIdAndUpdate(recordID, {$set : updatedData})
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
    let recordID = req.body.recordID;

    records.findByIdAndDelete(recordID)
    .then(() => {
        res.json({
            message: "Record Deleted !"
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