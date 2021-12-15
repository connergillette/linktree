const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  name: String,
  alias: String
})

module.exports = mongoose.model('MusicPlatform', schema);