const mongoose = require('mongoose')

const solutionSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  Solution: { type: String, require: true },
})

module.exports = mongoose.model('solutions', solutionSchema)