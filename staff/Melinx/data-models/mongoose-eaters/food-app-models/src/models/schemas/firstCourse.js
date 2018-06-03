
const { Schema } = require('mongoose')

module.exports = new Schema ({
  
    nameId: {
        type: String, // should be the fileName of the images?
        required: true
    },

    image: {
        type: Buffer,
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
    }
})
