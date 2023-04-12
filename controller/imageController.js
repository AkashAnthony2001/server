const image = require('../models/imageModel')

upload = (req,res,next)=>{
    let newImage = new image({
        name:req.body.name,
        image:{
            data:req.file.filename,
            contentType:'image/jpeg'
        }
    })
    newImage.save()
    .then(response => {
        res.json({
            message: "Image Added Sucessfully"
        })
    })
    .catch(error => {
        req.json({
            message: "Error !"
        })
    })
}

module.exports = {
    upload
}