const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

require('dotenv').config()

const LinkController = require('./controllers/LinkController')
const AuthController = require('./controllers/AuthController')

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(
  require('body-parser').urlencoded({
    extended: true
  })
)

async function connectToDB() {
  await mongoose.connect(process.env.MONGODB_CONNECTION)
  console.log('[APP] Connected to DB.')
}

connectToDB()

app.get('/', function (req, res) {
  res.send('Hello, world!')
})
app.get('/link', LinkController.getLinks)

app.post('/link/create/:type', LinkController.createLink)
app.post('/user/register', AuthController.registerUser)
 
app.listen(process.env.EXPRESS_PORT)
console.log(`App listening on port ${process.env.EXPRESS_PORT}`)