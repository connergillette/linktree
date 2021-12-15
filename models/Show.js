const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  date: Date,
  venueName: String,
  cityName: String,
  linkDestination: String,
  status: { type: String, enum: ['onSale', 'comingSoon', 'soldOut']}
})

module.exports = mongoose.model('Show', schema);