const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT | 5000
const app = express()

app.use(cors())
app.get('/save', (req, res) => {
  console.log('arrived')
  res.json({message: 'this is saved'})
  console.log('saved')
})

app.listen(PORT, () => {
  console.log('server connected and listening on port ' + PORT)
})
