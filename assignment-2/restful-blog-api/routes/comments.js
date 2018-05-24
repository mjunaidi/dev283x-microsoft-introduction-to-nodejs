module.exports = {
  getComments(req, res) {
    res.status(200).send(req.store.posts[req.params.postId].comments)
  },
  addComment(req, res) {
    const post = req.store.posts[req.params.postId]
    const newComment = req.body
    const comments = post.comments||[]
    const id = comments.length
    comments.push(newComment)
    post.comments = comments
    res.status(201).send({id: id})
  },
  updateComment(req, res) {
    const post = req.store.posts[req.params.postId]
    post.comments[req.params.id] = req.body
    res.status(200).send(post.comments[req.params.id])
  },
  removeComment(req, res) {
    req.store.posts[req.params.postId].comments.splice(req.params.id, 1)
    res.status(204).send()
  }
}
