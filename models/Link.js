const mongoose = require('mongoose')
const { Schema } = mongoose
const TypeMap = require('../linktypes/TypeMap')

const sublinkTypes = Object.values(TypeMap).map((val, index) => {
  return val.ref
})

const schema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  dateCreated: { type: Date, default: Date.now },
  title: { type: String, maxLength: 144 },
  sublink: {
    type: mongoose.Schema.ObjectId,
    refPath: 'sublinkType'
  },
  sublinkType: { 
    type: String, 
    required: true, 
    enum: sublinkTypes
  }
})

module.exports = mongoose.model('Link', schema);