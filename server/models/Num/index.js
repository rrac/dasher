const mongoose = require('mongoose')

const NumSchema = mongoose.Schema({
  cik: {
    type: String
  }
}, { strict: false })

const NumModel = mongoose.model('num', NumSchema)

module.exports = NumModel