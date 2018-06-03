
const { Schema, Schema: { Types: { Schema: { ObjectId } } } } = require('mongoose')

module.exports = new Schema({

    // role: {
    //     type: String,
    //     enum: ['user', 'admin'],
    //     default: 'user'
    // },

    eaterId: {
        type: String,
        required: true
    },
    
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
        lowercase: true,
        validate: function(email) {
            return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
          },
        required: true
    },

    password: {
        type: String,
        min: 64,
        max: 64
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
