const router = require('express').Router()
let Info = require('../models/info.model')

router.route('/').get((req, res) => {
  console.log('retrieving from database')
  Info.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error : ' + err))
})

router.route('/add').post((req, res) => {
  console.log('starting to add from to the database...')
  //console.log(res.body)
  console.log(req.body.name)
  const name = req.body.name
  const surname = req.body.surname
  const address = req.body.address
  const city = req.body.city
  const phone = req.body.phone
  const date = new Date()
  const questions = req.body.questions

  const newInfo = new Info({
    name,
    surname,
    address,
    city,
    phone,
    date,
    questions,
  })

  newInfo
    .save()
    .then(res.json({answer: 'info received'}))
    .catch((err) => res.status(400).json('Error1; ' + err))
})

module.exports = router
