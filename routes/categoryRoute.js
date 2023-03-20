const express = require('express');
const router = express.Router();

const categorycontroller = require('../controller/categoryController.js')

router.get('/' , categorycontroller.index)
router.get('/show' , categorycontroller.show)
router.post('/store' , categorycontroller.store)
router.post('/update' , categorycontroller.update)
router.post('/delete' ,categorycontroller.destroy)



module.exports = router; 