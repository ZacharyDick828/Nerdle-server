const mongoose = require('mongoose')

const letterSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  Letter: { type: String, require: true },
})

module.exports = mongoose.model('letters', letterSchema)