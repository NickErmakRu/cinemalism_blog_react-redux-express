const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const authRoutes = require('./routes/auth.routes')
const postsRoutes = require('./routes/posts.routes')
const usersRoutes = require('./routes/users.routes')
const uploadRoutes = require('./routes/upload.routes')
const app = express()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/static', express.static('uploads'));

app.use('/api/auth', authRoutes)
app.use('/api/posts', postsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/upload', uploadRoutes)

module.exports = app
