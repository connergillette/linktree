const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  linkDestination: String,
  rootLink: {
    type: mongoose.Schema.ObjectId,
    ref: 'Link'
  }
})

module.exports = mongoose.model('ClassicLink', schema);