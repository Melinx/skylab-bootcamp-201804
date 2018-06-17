
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
    //     default: Date.now,
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

    // would it be possible to push all orders into a history array (pastOrders) once the STATUS is 'paid', tracking date also?

})


