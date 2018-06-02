const mongoose = require('mongoose')
const { secondPlate } = require('./schemas')

module.exports = mongoose.model('secondPlate', secondPlate)