'use strict'

const { Schema } = require('mongoose')

module.exports = new Schema({

    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    yearOfBirth: {
        type: Date,
    },

    paymentCard: {
        paymentCard
    },

    ongoingOrder: [{ firstCourse, secondCourse }],

    pastOrders: [ ] // historial de pedidos

})
