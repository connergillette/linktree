const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  linkDestination: String,
  embedCode: String,
  platform: {
    type: mongoose.Schema.ObjectId,
    ref: 'MusicPlatform',
    autopopulate: true
  }
})
schema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('SongLocation', schema);