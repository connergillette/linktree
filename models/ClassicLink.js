const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  linkDestination: String
})

module.exports = mongoose.model('ClassicLink', schema);