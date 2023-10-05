const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

const routes = require('./routes/')

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', routes)

app.listen(PORT, function () {
    console.log('Listening on port', PORT)
})
