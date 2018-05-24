const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')

const store = {
  posts: [
    {
      name: 'First post',
      url: 'http://localhost:3000/posts/0',
      text: 'Sample post',
      comments: [
        {text: 'First comment'},
        {text: 'Another comment'},
      ]
    },
  ]
}

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use((req, res, next) => {
  req.store = store
  next()
})

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:id', routes.posts.updatePost)
app.delete('/posts/:id', routes.posts.removePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:id', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:id', routes.comments.removeComment)

app.listen(3000)
