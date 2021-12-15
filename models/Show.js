const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  date: Date,
  venueName: { type: String, required: true },
  cityName: { type: String, required: true },
  linkDestination: { type: String, required: true },
  status: { 
    type: String,
    enum: ['onSale', 'comingSoon', 'soldOut'],
    required: true
  }
})

module.exports = mongoose.model('Show', schema);