
const { Schema, Schema: { Types: { ObjectId } } } = require('mongoose')

module.exports = new Schema({

    firstCourse: [{
        type: ObjectId,
        ref: 'FirstCourse'
    }],

    secondCourse: [{
        type: ObjectId,
        ref: 'SecondCourse'
    }]

})