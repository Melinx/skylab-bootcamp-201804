
const { Schema } = require('mongoose')

module.exports = new Schema ({

    image: {
        type: String,
        required: true
    },

    dishName: {
        type: String, // should be a short description
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
    
    daysAvail: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        required: true
    },

    category: {
        type: String,
        enum: [firstCourse, secondCourse],
        required: true
        
    }

})
