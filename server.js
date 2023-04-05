const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const multer = require('multer')

const bookroute = require('./routes/booksRoute.js')
const categoryroute = require('./routes/categoryRoute.js')
const recordsroute = require('./routes/recordsRoute.js')
const userroute = require('./routes/userRoute.js')
const imageroute = require('./routes/imageRoute.js')
const images = require('./models/imageModel.js')

dotenv.config()

const URL = process.env.DB_URL

mongoose.connect(URL , {useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (err) =>{
    console.log(err);
})
    
db.once('open' , () => {
    console.log('Database Connection Established !');
})

const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
});

const upload = multer ({
    storage: Storage
}).single('testImage');




const app = express()
app.use(express.json())

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())


const PORT = process.env.PORT || 8000 ; 

app.listen(PORT, () =>{
    console.log('Server Running On Port:',PORT);
})

app.use('/books' , bookroute)
app.use('/category' , categoryroute)
app.use('/records' , recordsroute)
app.use('/user' , userroute)



app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            let newImage = new images({
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
    })
})

