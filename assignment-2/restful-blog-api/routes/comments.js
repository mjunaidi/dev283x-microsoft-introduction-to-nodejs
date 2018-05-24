const store = require('../store')

module.exports = {
  getComments(req, res) {
    const postId = req.params.postId
    const post = store.posts[postId]
    res.status(200).send(post.comments)
  },
  addComment(req, res) {
    const postId = req.params.postId
    const post = store.posts[postId]
    const newComment = req.body
    const comments = post.comments||[]
    const id = comments.length
    comments.push(newComment)
    post.comments = comments
    //store.posts[postId] = post
    res.status(201).send({id: id})
  },
  updateComment(req, res) {
    const postId = req.params.postId
    const post = store.posts[postId]
    post.comments[req.params.id] = req.body
    res.status(200).send(post.comments[req.params.id])
  },
  removeComment(req, res) {
    const postId = req.params.postId
    const post = store.posts[postId]
    post.comments.splice(req.params.id, 1)
    res.status(204).send()
  }
}
