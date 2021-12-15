const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  linkDestination: { type: String, required: true },
  embedCode: { type: String, required: true },
  platform: {
    type: mongoose.Schema.ObjectId,
    ref: 'MusicPlatform',
    autopopulate: true
  }
})
schema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('SongLocation', schema);