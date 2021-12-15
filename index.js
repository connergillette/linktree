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
  console.log('Connected to DB.')

  // TODO: Given more time, I'd formalize this as its own seed file
  if (await User.findOne() === null) {
    await new User(requestData).save()

    await new Link({
      user: user,
      title: 'Classic Link'
    }).save()

    await new ClassicLink({
      linkDestination: 'https://linkedin.com/in/connergillette',
      rootLink: createdRootLink
    }).save()
  }
}

connectToDB()

app.get('/', function (req, res) {
  res.send('Hello, world!')
})

app.post('/link/create', LinkController.createLink)
app.post('/user/register', AuthController.registerUser)
 
app.listen(process.env.EXPRESS_PORT)
console.log(`App listening on port ${process.env.EXPRESS_PORT}`)