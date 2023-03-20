const express = require('express');
const router = express.Router();

const recordscontroller = require('../controller/recordsController.js')

router.get('/' , recordscontroller.index)
router.get('/show' , recordscontroller.show)
router.post('/store' , recordscontroller.store)
router.post('/update' , recordscontroller.update)
router.post('/delete' ,recordscontroller.destroy)



module.exports = router; 