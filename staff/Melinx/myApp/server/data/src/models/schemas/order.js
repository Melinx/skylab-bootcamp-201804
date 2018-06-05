
const { Schema, Schema: { ObjectId } } = require('mongoose')
const Course = require('./course')

module.exports = new Schema({

    eaterId: {
        type: ObjectId,
        ref: 'Eater'
    },

    timeStamp: { type: Date, default: Date.now }, // indicates when the order was placed also. If it's past 10:59 am it automatically moves to next day.

    meals: [{
        type: Array, // ObjectId,
        ref: 'Course',
        required: true
    }],

    pickupDay: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        required: true
    },

    pickupTime: {
        type: String,
        enum: ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45'],
        required: true
    },

    status: {
        type: String,
        enum: ['processing', 'paid'],
        default: 'processing'
    }

    // would it be possible to push all orders into a history array (pastOrders) once the STATUS is 'paid', tracking date also?

})


