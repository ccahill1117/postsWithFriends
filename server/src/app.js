const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

console.log('hello worlddd');

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?",
      oneOtherThing: "ok",
      hi: "hi"

    }]
  )
}),
app.get('/', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      

    }]
  )
})

app.listen(process.env.PORT || 8081)