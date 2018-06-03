const mongoose = require('mongoose')
const { Meal } = require('./schemas')

module.exports = mongoose.model('Meal', Meal)