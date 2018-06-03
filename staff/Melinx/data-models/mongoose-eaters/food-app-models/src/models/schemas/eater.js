
const { Schema, Schema: { Types: { Schema: { ObjectId } } } } = require('mongoose')

module.exports = new Schema({

    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    yearOfBirth: {
        type: Date,
    },

    gender: {
        type: String,
        enum: ['M', 'F', 'U'],
        required: true
    },

    payment: {
        type: objectID,
        required: true
    },

    ongoingOrder: [{
        ref: 'Meal',
        type: objectID
    }],

    pastOrders: [{
        type: objectID
    }]
    //historial de pedidos

})
