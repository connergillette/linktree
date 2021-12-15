const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

require('dotenv').config()

const LinkController = require('./controllers/LinkController')
const AuthController = require('./controllers/AuthController')

const User = require('./models/User')
const Link = require('./models/Link')
const ClassicLink = require('./models/ClassicLink')
const MusicPlatform = require('./models/MusicPlatform')

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

  // TODO: Formalize this as its own seed file
  if (await User.findOne() === null) {
    console.log('Seeding user and classic link...')
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

  if (await MusicPlatform.findOne() === null) {
    console.log('Seeding music platforms...')
    let allMusicPlatforms = ['Spotify', 'Apple Music', 'Soundcloud', 'YouTube Music', 'Deezer', 'Tidal', 'Bandcamp']
    for (let platform of allMusicPlatforms) {
      await new MusicPlatform({
        name: platform,
        alias: platform.split(' ')[0].toLowerCase()
      }).save()
    }
  }
}

connectToDB()

app.get('/', function (req, res) {
  res.send('Hello, world!')
})

app.post('/link/create/:type', LinkController.createLink)
app.post('/user/register', AuthController.registerUser)
 
app.listen(process.env.EXPRESS_PORT)
console.log(`App listening on port ${process.env.EXPRESS_PORT}`)