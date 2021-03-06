const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  name: { type: String, required: true },
  alias: { type: String, required: true }
})

module.exports = mongoose.model('MusicPlatform', schema);