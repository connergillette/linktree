const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  linkDestination: { type: String, required: true }
})

module.exports = mongoose.model('ClassicLink', schema);