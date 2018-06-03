const mongoose = require('mongoose')
const { SecondCourse } = require('./schemas')

module.exports = mongoose.model('SecondCourse', SecondCourse)