const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  username: { type: String, required: true },
  fullName: { type: String, required: true },
  photoURL: { type: String, required: true }
})

module.exports = mongoose.model('User', schema);