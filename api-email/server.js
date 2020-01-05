'use strict'
require('dotenv').config({ path: './env/.env' })

const Log = require('./src/services/logger')
const express = require('express')
const app = express()
const cors = require('cors')
const EmailRoute = require('./src/routes/email-route')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

new EmailRoute(app).route()

app.listen(process.env.PORT, () => {
    Log.info(`Listening on PORT: ${process.env.PORT}`)
})