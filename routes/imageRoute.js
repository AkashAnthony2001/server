const express = require ('express')
const router = express.Router()

const imagecontroller = require('../controller/imageController')


router.post("/upload" , imagecontroller.upload)

module.exports = router;