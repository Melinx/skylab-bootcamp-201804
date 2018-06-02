const mongoose = require('mongoose')
const { firstCourse } = require('./schemas')

module.exports = mongoose.model('firstCourse', firstCourse)