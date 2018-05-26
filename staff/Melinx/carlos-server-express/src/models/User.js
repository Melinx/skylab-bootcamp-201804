'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    
})

const Users = mongoose.model('User', userSchema )
module.exports = Users