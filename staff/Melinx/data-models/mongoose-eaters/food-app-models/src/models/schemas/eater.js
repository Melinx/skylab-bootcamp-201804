
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
        lowercase: true,
        validate: function(email) {
            return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
          },
        required: true
    },

    password: {
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
        type: Payment,
        required: true
    },

    orders: [{
        type: objectID,
        ref: 'Meal'
    }],

    pastOrders: [{
        type: objectID,
        ref: 'Meal'
    }]
    //historial de pedidos

})
