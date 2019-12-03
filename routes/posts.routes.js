const express = require('express')
const passport = require('passport')
const controller = require('../controllers/controller.posts')
const router = express.Router()

const m = require('../checks/middlewares')

router.get('/', controller.getAllPosts)

router.get('/:id', m.mustBeInteger, controller.getPostById)

router.post('/', passport.authenticate('jwt', {session: false}),
    m.checkFieldsPost, controller.createPost)

router.put('/:id', passport.authenticate('jwt', {session: false}),
    m.mustBeInteger, m.checkFieldsPost, controller.updatePost)

router.delete('/:id', passport.authenticate('jwt', {session: false}),
    m.mustBeInteger, controller.deletePost)

// passport.authenticate('jwt', {session: false}),

module.exports = router
