const filename = '../data/images.json'
const path = require('path')
const configPath = path.join(__dirname, filename)

let data = require(filename)
let images = data

const check = require('../checks/check.js')

function newUpload(imgFiles) {
    return new Promise((resolve, reject) => {

        const imgs = imgFiles.map((file) => { return file.path })

        newImgUpload = { imgs }

        images.push(imgs)
        check.writeJSONFile(configPath, images)
        resolve(newImgUpload)
    })
}

module.exports = {
    newUpload
}
