
Using in-memory store with the structure similar to this:
```javascript
let store = {
  posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [
      text: 'Cruel…..var { house, mouse} = No type optimization at all',
      text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
      text: '(p1,p2)=>{ … } ,i understand this ,thank you !'      
    ]
    }
  ]
}
```

# Testing with curl

```
//posts post data
curl -H "Content-Type: application/json" -X POST -d "{\"name\": \"Top 10 ES6 Features\", \"url\":\"http://webapplog.com/es6\", \"text\": \"\"}"  "http://localhost:3000/posts"

//updates post data at specific id
curl -H "Content-Type: application/json" -X PUT -d "{\"name\": \"Top 10 ES6 Features Every Developer Must Know\", \"url\":\"http://webapplog.com/es6\", \"text\": \"\"}"  "http://localhost:3000/posts/0"

//gets post data
curl "http://localhost:3000/posts"

//deletes post data at specific id
curl -X DELETE "http://localhost:3000/posts/0"

// post comment to the first post
curl -H "Content-Type: application/json" -X POST -d "{\"text\": \"Testing...\"}"  "http://localhost:3000/posts/0/comments"

// update comment of the first post
curl -H "Content-Type: application/json" -X PUT -d "{\"text\": \"Testing, testing, 1, 2, 3!\"}"  "http://localhost:3000/posts/0/comments/0"

// get all comments for the first post
curl "http://localhost:3000/posts/0/comments"

// remove the first comment of the first post
curl -X DELETE "http://localhost:3000/posts/0/comments/0"
```
