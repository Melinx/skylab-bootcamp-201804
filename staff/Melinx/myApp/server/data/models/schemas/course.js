
const { Schema } = require('mongoose')

module.exports = new Schema ({

    category: {
        type: String,
        enum: ['firstCourse', 'secondCourse'],
        required: true
    },

    image: {
        type: 'String',
        required: true
    },

    dishName: {
        type: String,
        required: true
    },

    temp: {
        type: String,
        enum: ['hot', 'cold']
    },

    baseFood: {
        type: String, 
        enum: ['meat', 'fish', 'green', 'pasta', 'rice', 'bean']
    },
    
    dayAvail: {
        type: String,
        enum: ['1', '2', '3', '4', '5'],
        required: true
    }
})
