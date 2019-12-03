const upload = require('../models/upload.model')


module.exports.uploadImg = async (req, res) => {

    await upload.newUpload(req.files)
        .then(upload => res.status(201).json({
            message: `The images has been uploaded`,
            content: upload
        }))
        .catch(err => {
            res.status(500).json({ message: err.message })
            console.log('произошла ошибка')
        })
}
