const mongoose = require('mongoose')
const { FirstCourse } = require('./schemas')

module.exports = mongoose.model('FirstCourse', FirstCourse)