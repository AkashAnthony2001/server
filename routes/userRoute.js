const express = require('express');
const router = express.Router();

const usercontroller = require('../controller/userController.js')

router.get('/' , usercontroller.index)
router.get('/show' , usercontroller.show)
router.post('/isExist' , usercontroller.isExist)
router.post('/store' , usercontroller.store)
router.post('/update' , usercontroller.update)
router.delete('/delete/:_id' ,usercontroller.destroy)



module.exports = router; 