const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  songName: String,
  albumName: String,
  albumArtURL: String,
  artistName: String,
  songLocations: [{
    type: mongoose.Schema.ObjectId,
    ref: 'SongLocation'
  }],
  rootLink: {
    type: mongoose.Schema.ObjectId,
    ref: 'Link'
  }
})

module.exports = mongoose.model('MusicLink', schema);