
const { Schema, Schema: { Type: { objectID } } } = require('mongoose')

module.exports = new Schema({

    eaterId: {
        type: String,
    },

    timestampId: { type: Date, default: Date.now }, // indicates when the order was placed also. If it's past 10:59 am it automatically moves to next day.

    meal: {
        type: objectID,
        required: true
    },

    pickupDay: {
        type: Number,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        required: true
    },

    pickupTime: {
        type: Number,
        enum: ['12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45'],
        required: true
    },
    orderStatus: {
        type: String,
        enum: ['processing', 'paid', 'missedPickup'],
        default: 'processing'
    }
    
    // would it be possible to push all orders into a history array (pastOrders) once the STATUS is 'paid', tracking date also?
    
})


