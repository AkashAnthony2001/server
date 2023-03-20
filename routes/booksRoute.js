const express = require('express');
const router = express.Router();

const bookcontroller = require('../controller/booksController.js')

router.get('/' , bookcontroller.index)
router.get('/show' , bookcontroller.show)
router.post('/store' , bookcontroller.store)
router.post('/update' , bookcontroller.update)
router.post('/delete' ,bookcontroller.destroy)



module.exports = router; 