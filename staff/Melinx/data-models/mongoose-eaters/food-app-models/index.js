
const mongoose = require('mongoose')
const { Eater, Meal, FirstCourse, SecondCourse, OngoingOrder, Payment } = require ('./src/models')

mongoose.connect('mongodb://localhost/skylab-bootcamp-201804-test')
.then(()=> {

    const secondPlateSchema = mongoose.model('secondPlate', {name: String})

    const user = mongoose.model('us')
})
.catch(console.error)