const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  shows: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Show'
  }],
  rootLink: {
    type: mongoose.Schema.ObjectId,
    ref: 'Link'
  }
})

module.exports = mongoose.model('ShowListLink', schema);