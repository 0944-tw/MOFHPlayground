/*
MyOwnFreeHost Playground
===========================
Testing MOFH API Without creating MOFH Accounts!
 */

const express = require('express');
const port = 3000
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', require('./account/create'))
app.use('/', require('./domain/index'))
console.log(`Listen on localhost:${port}. `)
app.listen(port)
