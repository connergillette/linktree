const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  shows: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Show',
    autopopulate: true,
    required: true
  }]
})
schema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('ShowListLink', schema);