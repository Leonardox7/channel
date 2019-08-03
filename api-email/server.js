'use strict'

require('dotenv').config({ path: './env/.env' })

const Log = require('./src/services/logger')

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(process.env.PORT, () => {
    Log.info(`Listening on PORT: ${process.env.PORT}`)
})