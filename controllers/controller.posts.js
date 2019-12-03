const post = require('../models/post.model')

module.exports.getAllPosts = async (req, res) => {
    await post.getAllPosts()
        .then(posts => res.json(posts))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({message: err.message})
            } else {
                res.status(500).json({message: err.message})
            }
        })
}

module.exports.getPostById = async (req, res) => {
    const id = req.params.id
    await post.getPostById(id)
        .then(post => res.json(post))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({message: err.message})
            } else {
                res.status(500).json({message: err.message})
            }
        })
}

module.exports.createPost = async (req, res) => {

    await post.createPost(req.body, req.files)
        .then(post => res.status(201).json({
            message: `The post #${post.id} has been created`,
            content: post
        }))
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

module.exports.updatePost = async (req, res) => {
    const id = req.params.id
    await post.updatePost(id, req.body)
        .then(post => res.json({
            message: `The post #${id} has been updated`,
            content: post
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
}

module.exports.deletePost = async (req, res) => {
    const id = req.params.id
    await post.deletePost(id)
        .then(post => res.json({
            message: `The post #${id} has been deleted`
        }))
        .catch(err => {
            console.log('error id ', id)
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            }
            res.status(500).json({ message: err.message })
        })
}

module.exports.createPostForm = () => {

}
