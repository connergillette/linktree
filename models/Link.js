const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  dateCreated: { type: Date, default: Date.now },
  title: { type: String, maxLength: 144 },
})

module.exports = mongoose.model('Link', schema);