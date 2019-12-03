const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../checks/keys')

const user = require('../models/user.model')
let users = require('../data/users.json')

module.exports.login = async (req, res) => {

    const candidate = await users.find((user) => {
        return ( (user.email === req.body.email) || (user.name === req.body.name) )
    })

    if (candidate) {
        const samePassword = bcrypt.compareSync(req.body.password, candidate.password)
        if (samePassword) {

            const token = jwt.sign({
                email: candidate.email,
                name: candidate.name,
                role: candidate.role,
                userId: candidate.id
            }, keys.jwt, { expiresIn: 3600 })

            res.cookie("jwt", token);

            res.status(200).json({
                token: `Bearer ${token}`,
                user: {
                    email: candidate.email,
                    name: candidate.name,
                    role: candidate.role
                }
            })

        } else {
            res.status(401).json({ password: 'Неверный пароль' })
        }
    } else {
        res.status(404).json({ name: 'Пользователь не найден' })
    }
}


module.exports.register = async (req, res) => {

    const candidateEmail = await users.find((user) => {
        return (user.email === req.body.email)
    })

    const candidateName = await users.find((user) => {
        return (user.name === req.body.name)
    })

    if (req.body.name === undefined) {
        res.status(409).json({ name: 'введите имя' })
    }

    if (candidateEmail) {
        res.status(409).json({ email: 'Данный email уже зарегестрирован' })
    } else if (candidateName) {
        res.status(409).json({ name: 'Данное имя пользователя уже занято'} )
    } else {
        await user.createUser(req.body)
            .then(user => res.status(201).json({
                message: `The user #${user.id} has been created`,
                content: user
            }))
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
}


