const express = require('express')
const controller = require('../controllers/controller.auth')
const router = express.Router()
const m = require('../checks/middlewares')

http://localhost:3000/api/auth/login
router.post('/login', controller.login)
router.post('/register', m.checkFieldsUser, controller.register)

module.exports = router
