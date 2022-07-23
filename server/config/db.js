const mongoose = require('mongoose')

const db = process.env.URI

const dbConnect = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    })
    console.log('database connected...')
  } catch (err) {
    console.err(err.message)
    process.exit(1)
  }
}

module.exports = dbConnect
