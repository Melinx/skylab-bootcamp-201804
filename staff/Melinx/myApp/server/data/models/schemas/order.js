
const { Schema, Schema: { ObjectId } } = require('mongoose')
const Course = require('./course')

module.exports = new Schema({

    eaterId: {
        type: ObjectId,
        ref: 'Eater',
        required: true
    },

    // date: { 
    //     type: Date, 
    //     default: New date(),
    //     required: true
    // },

    firstCourse: {
        type: ObjectId,
        ref: 'Course',
        required: true
    },

    secondCourse: {
        type: ObjectId,
        ref: 'Course',
        required: true,
    },

    pickupDate: { type: String },

    statusPaid: {
        type: Boolean,
        default: false
    }

})


