const express = require('express')
const passport = require('passport')
const controller = require('../controllers/controller.upload')
const router = express.Router()
const upload = require('../middleware/upload')

router.post('/', upload.array('image',2), controller.uploadImg)

module.exports = router
