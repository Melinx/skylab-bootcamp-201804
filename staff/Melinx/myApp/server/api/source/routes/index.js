
const express = require('express')
const bodyParser = require('body-parser')
const logic = require('logic')

const router = express.Router()

const { env: { PORT, DB_URL } } = process

