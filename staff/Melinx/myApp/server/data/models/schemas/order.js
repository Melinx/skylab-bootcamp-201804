
const { Schema, Schema: { ObjectId } } = require('mongoose')
const Course = require('./course')

module.exports = new Schema({

    eaterId: {
        type: ObjectId,
        ref: 'Eater'
    },

    date: { type: Date }, 

    meals: [{
        firstCourse: {
            type: ObjectId,
            ref: 'Course',
            required: true,
        },
        secondCourse: {
            type: ObjectId,
            ref: 'Course',
            required: true,
        }
    }],

    pickupDate: { type: Date },

    status: {
        type: String,
        enum: ['processing', 'paid'],
        default: 'processing'
    }

    // would it be possible to push all orders into a history array (pastOrders) once the STATUS is 'paid', tracking date also?

})


