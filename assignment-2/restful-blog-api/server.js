const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')
const store = require('./store')

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.get('/posts', (req, res) => {
  routes.posts.getPosts(req, res)
})
app.post('/posts', (req, res) => {
  routes.posts.addPost(req, res)
})
app.put('/posts/:id', (req, res) => {
  routes.posts.updatePost(req, res)
})
app.delete('/posts/:id', (req, res) => {
  routes.posts.removePost(req, res)
})

app.listen(3000)
