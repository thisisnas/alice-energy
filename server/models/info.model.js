const mongoose = require('mongoose')

const infoSchema = mongoose.Schema({
  name: {type: String},
  surname: {type: String},
  address: {type: String},
  city: {type: String},
  phone: {type: String},
  date: {type: Date},
  questions: {type: Array},
})

let Info = mongoose.model('Info', infoSchema)
module.exports = Info
