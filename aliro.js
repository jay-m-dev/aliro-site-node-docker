const express = require('express')
// const path = require('path')
// const config = require('./config/config')
require('dotenv').config()

const app = express()
const cors = require('cors')
const compression = require('compression')
// const helmet = require('helmet')
// const ejs = require('ejs')
require('ejs')

app.use(cors())
app.use(compression())
app.use(express.static('public'))
app.set('view engine', 'ejs')
// app.use(helmet())

app.get('/', (req, res) => {
  res.render('aliro')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/install', (req, res) => {
  res.render('install')
})

app.get('/publications', (req, res) => {
  res.render('publications')
})

app.get('/tutorials', (req, res) => {
  res.render('tutorials')
})

// app.get('/download', (req, res) => {
//   res.render('download')
// })

app.listen(process.env.ALIRO_PORT, () => {
    console.log("listening on port: ", process.env.ALIRO_PORT)
})
