const mongoose = require('mongoose')

require('dotenv').config()

const User = require('../models/User')
const Link = require('../models/Link')
const ClassicLink = require('../models/ClassicLink')
const MusicPlatform = require('../models/MusicPlatform')

async function seedDB() {
  await mongoose.connect(process.env.MONGODB_CONNECTION)
  console.log('[SEEDING] Connected to DB.')

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

  mongoose.disconnect()
  console.log('[SEEDING] Disconnected from DB.')
}

seedDB()