const { resolve } = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

// Connect to our DB
// this URL will change
mongoose.connect('mongodb://localhost:27017', { useMongoClient: true })

const models = require('./models')
const { Num } = models

const app = express()
const { PORT = 5000 } = process.env

app.use(express.static(resolve(__dirname, '..', 'public')))

app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/collection', (req, res) => {
  Num.find({}).lean()
    .then(data => res.json({ data }))
})

app.listen(PORT, () => console.log(`Listening at: localhost:${PORT}`))