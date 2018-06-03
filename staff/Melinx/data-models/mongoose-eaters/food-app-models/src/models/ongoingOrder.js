const mongoose = require('mongoose')
const { OngoingOrder } = require('./schemas')

module.exports = mongoose.model('OngoingOrder', OngoingOrder)