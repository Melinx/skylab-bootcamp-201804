
const { Schema } = require('mongoose')

module.exports = new Schema({
    cardHolderName: {
        type: String,
        required: true
    },
    
    cardHolderLastName: {
        type: String,
        required: true
    },

    cardNumber: {
        type: Number,
        required: true        
    },
    
    expirationDate: {
        type: Date,
        required: true
    }

})