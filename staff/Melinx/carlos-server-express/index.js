'use strict'

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./src/routes')
const port = process.env.PORT

mongoose.connect('mongodb://localhost:27017/skylab-bootcamp-201804')
    .then(() => {

        const app = express()
        app.use('/api', router)

        app.listen(port, () => console.log(`server running on port ${port}`))

        process.on('SIGINT', () => {
            console.log('\nstopping server')

            process.exit()
        })

    })
    .catch(err => {
        console.error('App started error', err.stack);
        process.exit()

    })
