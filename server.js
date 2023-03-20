const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')

const bookroute = require('./routes/booksRoute.js')
const categoryroute = require('./routes/categoryRoute.js')
const recordsroute = require('./routes/recordsRoute.js')
const userroute = require('./routes/userRoute.js')


mongoose.connect('mongodb://127.0.0.1:27017/lms' , {useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (err) =>{
    console.log(err);
})

db.once('open' , () => {
    console.log('Database Connection Established !');
})

const app = express()
app.use(express.json())

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

const PORT = process.env.PORT || 3000 ; 

app.listen(PORT, () =>{
    console.log('Server Running On Port:',PORT);
})

app.use('/books' , bookroute)
app.use('/category' , categoryroute)
app.use('/records' , recordsroute)
app.use('/user' , userroute)


