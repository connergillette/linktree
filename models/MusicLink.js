const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  songName: String,
  albumName: String,
  albumArtURL: String,
  artistName: String,
  songLocations: [{
    type: mongoose.Schema.ObjectId,
    ref: 'SongLocation',
    autopopulate: true,
    required: true
  }]
})
schema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('MusicLink', schema);