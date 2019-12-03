const express = require('express')
const passport = require('passport')

const controller = require('../controllers/controller.users')
const router = express.Router()

const m = require('../checks/middlewares')

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAllUsers)
// router.post('/', m.checkFieldsUser, controller.createUser)

module.exports = router
