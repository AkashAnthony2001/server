const express = require('express');
const router = express.Router();

const bookcontroller = require('../controller/booksController.js')

router.get('/' , bookcontroller.index)
router.get('/show' , bookcontroller.show)
router.post('/store' , bookcontroller.store)
router.put('/update/:_id' , bookcontroller.update)
router.delete('/delete/:_id' ,bookcontroller.destroy)



module.exports = router; 