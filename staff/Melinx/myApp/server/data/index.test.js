'use strict'

require('dotenv').config()

const { mongoose, models: { Eater, Course, Order, Payment } } = require('.')
const { expect } = require('chai')

const { env: { DB_URL } } = process

describe('models (myApp)', () => {

    const firstCourse = { category: 'firstCourse', image: 'img1', dishName: 'macarrones', temp: 'cold', baseFood: 'green', daysAvail: 'Monday' }

    const secondCourse = { category: 'secondCourse', image: 'img2', dishName: 'pollo', temp: 'hot', baseFood: 'meat', daysAvail: 'Monday' }

    const timeStamp = Date.now()
    const meals = []

    const eater = { name: 'John', lastName: 'Doe', email: 'johndoe@mail.com', password: '123', yearOfBirth: 1988, gender: 'M' }

    const pepe = { eaterId: eater._id, timeStamp, meals, pickupDay: 'Monday', pickupTime: '13:45', status: 'processing' }

    const maria = { eaterId: eater._id, timeStamp, meals, pickupDay: 'Monday', pickupTime: '12:00', status: 'paid' }

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => Promise.all([Eater.remove(), Order.deleteMany()]))

    describe('create course', () => {

        it('should succeed on correct data', () => {
            const course1 = new Course(firstCourse)
            const course2 = new Course(secondCourse)

            return Promise.all([course1.save(), course2.save()])
                .then(courses => {
                    expect(course1).to.exist
                    expect(course1.category).to.equal('firstCourse')
                    expect(course1.image).to.equal('img1')
                    expect(course1.dishName).to.equal('macarrones')
                    expect(course1.temp).to.equal('cold')
                    expect(course1.baseFood).to.equal('green')
                    expect(course1.daysAvail).to.equal('Monday')

                    expect(course2.dishName).to.equal('pollo')
                    expect(course2.temp).to.equal('hot')
                    expect(course2.baseFood).to.equal('meat')
                    expect(course2.daysAvail).to.equal('Monday')

                    expect(courses.length).to.equal(2)
                    expect(courses.length).not.to.equal(3)

                })
        })
    })

    describe('create order', () => {

        const course1 = new Course(firstCourse)
        const course2 = new Course(secondCourse)

        course1.save(), course2.save()

        it('should succeed on correct data', () => {
            
            pepe.meals.push(course1._id)
            maria.meals.push(course2._id)
            
            const order1 = new Order(pepe)
            const order2 = new Order(maria)

            return Promise.all([order1.save(), order2.save()])
                .then((orders) => {
               
                    expect(order1._id).to.exist
                    expect(order1.timeStamp).to.exist
                    expect(order1.meals.length).to.equal(2)
                    expect(order1.pickupDay).to.equal('Monday')
                    expect(order1.pickupTime).to.equal('13:45')
                    expect(order1.status).to.equal('processing')
                })
        })
    })

    describe('create eater', () => {

        it('should succeed on correct data', () => {

            const eater = new Eater({ name: 'John', lastName: 'Doe', email: 'johndoe@mail.com', password: '123', yearOfBirth: 1988, gender: 'M' })

            return eater.save()
                .then(eater => {
                    expect(eater._id).to.exist
                    expect(eater.name).to.equal('John')
                    expect(eater.lastName).to.equal('Doe')
                    expect(eater.email).to.equal('johndoe@mail.com')
                    expect(eater.password).to.equal('123')
                    expect(eater.yearOfBirth).to.equal(1988)
                    expect(eater.gender).to.equal('M')
                })
        })
    })

    describe('create payment', () => {
        it('should succeed on correct payment data', ()=>{
            const payment = new Payment({cardHolderName: 'Jane', cardHolderLastName: 'Doe', cardNumber: '1111333344445555', expirationDate: '12/2020' })
            return payment.save()
                .then(payment => {
                    expect(payment._id).to.exist
                    expect(payment.cardHolderName).to.equal('Jane')
                    expect(payment.cardHolderLastName).to.equal('Doe')
                    expect(payment.cardNumber).to.equal('1111333344445555')
                    expect(payment.expirationDate).to.equal('12/2020')
                })
        })
    })


  after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))

})