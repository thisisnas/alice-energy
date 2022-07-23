const express = require('express')
const cors = require('cors')
const infosRouter = require('./routers/infos')
const mongoose = require('mongoose')

require('dotenv').config()

const dbConnect = require('./config/db.js')

const PORT = process.env.PORT | 5000
const app = express()

/**connexion to the database */
dbConnect()

app.use(cors())
app.use(express.json())

app.get('/save', (req, res) => {
  console.log('arrived')
  res.json({message: 'this is saved'})
  console.log('saved')
})

app.post('/save', (req, res) => {
  console.log('arrived')

  console.log(req)
  console.log('saved')
})

app.use('/infos', infosRouter)

app.listen(PORT, () => {
  console.log('server connected and listening on port ' + PORT)
})
