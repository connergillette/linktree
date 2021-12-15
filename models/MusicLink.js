const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  songName: { type: String, required: true },
  albumName: { type: String, required: true },
  albumArtURL: { type: String, required: true },
  artistName: { type: String, required: true },
  songLocations: [{
    type: mongoose.Schema.ObjectId,
    ref: 'SongLocation',
    autopopulate: true,
    required: true
  }]
})
schema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('MusicLink', schema);