const mongoose = require('mongoose')
const { secondCourse } = require('./schemas')

module.exports = mongoose.model('secondCourse', secondCourse)