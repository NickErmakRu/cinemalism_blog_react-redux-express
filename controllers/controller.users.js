const user = require('../models/user.model')

module.exports.getAllUsers = async (req, res) => {
    await user.getAllUsers()
        .then(posts => res.json(posts))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({message: err.message})
            } else {
                res.status(500).json({message: err.message})
            }
        })
}

module.exports.createUser = async (req, res) => {
    await user.createUser(req.body)
        .then(user => res.status(201).json({
            message: `The user #${user.id} has been created`,
            content: user
        }))
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}
