const filename = '../data/users.json'
const path = require('path')
const configPath = path.join(__dirname, filename)

const bcrypt = require('bcryptjs')

let data = require(filename)
let users = data

const check = require('../checks/check.js')

function getAllUsers() {
    return new Promise((resolve, reject) => {
        if (users.length === 0) {
            reject({
                message: 'no users available',
                status: 202
            })
        }
        resolve(users);
    })
}

function createUser(newUser) {
    return new Promise((resolve, reject) => {
        const id = { id: check.getNewId(users) }
        const salt = bcrypt.genSaltSync(10)
        const password = bcrypt.hashSync(newUser.password, salt)

        newUser.role === 'admin' ? newUser.role : newUser.role = 'user'
        newUser.password = password

        newUser = { ...id, ...newUser }
        users.unshift(newUser)
        check.writeJSONFile(configPath, users)
        resolve(newUser)
    })
}

module.exports = {
    getAllUsers,
    createUser,
    users
}
