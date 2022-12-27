const express = require('express')
require('dotenv').config()

const app = express()
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')

require('ejs')

app.use(cors())
app.use(compression())
app.use(express.static('public', {maxAge: 3600000 }))
app.set('view engine', 'ejs')
app.use(helmet())

app.get('/', (req, res) => {
  res.render('aliro')
})

app.listen(process.env.ALIRO_PORT, () => {
    console.log("listening on port: ", process.env.ALIRO_PORT)
})
