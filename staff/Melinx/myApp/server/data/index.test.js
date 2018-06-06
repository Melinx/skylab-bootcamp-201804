'use strict'

require('dotenv').config()

const { mongoose, models: { Eater, Course, Order, Payment } } = require('.')
const { expect } = require('chai')

const { env: { DB_URL } } = process

describe('models (myApp)', () => {

    const firstCourse = { category: 'firstCourse', image: 'img1', dishName: 'macarrones', temp: 'cold', baseFood: 'green', dayAvail: 'Monday' }

    const secondCourse = { category: 'secondCourse', image: 'img2', dishName: 'pollo', temp: 'hot', baseFood: 'meat', dayAvail: 'Monday' }

    const date = new Date

    const john = { name: 'John', lastName: 'Doe', email: 'johndoe@mail.com', password: '123', yearOfBirth: 1988, gender: 'M' }

    const pepeOrder = { date, pickupDate: date, status: 'processing' }

    const mariaOrder = { date, pickupDate: date, status: 'paid' }

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => Promise.all([Eater.remove(), Order.deleteMany(), Course.deleteMany()]))

    describe('create course', () => {
        it('should succeed on correct data', () => {
            const course1 = new Course(firstCourse)
            const course2 = new Course(secondCourse)

            return Promise.all([course1.save(), course2.save()])
                .then(courses => {
                    expect(courses.length).to.equal(2)
                    expect(courses.length).not.to.equal(3)

                    const [course1, course2] = courses

                    expect(course1._id).to.exist
                    expect(course1.category).to.equal(firstCourse.category)
                    expect(course1.image).to.equal(firstCourse.image)
                    expect(course1.dishName).to.equal(firstCourse.dishName)
                    expect(course1.temp).to.equal(firstCourse.temp)
                    expect(course1.baseFood).to.equal(firstCourse.baseFood)
                    expect(course1.dayAvail).to.equal(firstCourse.dayAvail)

                    expect(course2._id).to.exist
                    expect(course2.category).to.equal(secondCourse.category)
                    expect(course2.dishName).to.equal(secondCourse.dishName)
                    expect(course2.temp).to.equal(secondCourse.temp)
                    expect(course2.baseFood).to.equal(secondCourse.baseFood)
                    expect(course2.dayAvail).to.equal(secondCourse.dayAvail)
                })
        })
    })

    describe('create order', () => {
        it('should succeed on correct data', () => {
            const course1 = new Course(firstCourse)
            const course2 = new Course(secondCourse)

            return Promise.all([course1.save(), course2.save()])
                .then(courses => {
                    const [course1, course2] = courses

                    const order1 = new Order(pepeOrder)
                    const order2 = new Order(mariaOrder)

                    order1.meals.push({
                        firstCourse: course1._id,
                        secondCourse: course2._id
                    })

                    order2.meals.push({
                        firstCourse: course1._id,
                        secondCourse: course2._id
                    })

                    return Promise.all([order1.save(), order2.save()])
                        .then(orders => {
                            const [order1, order2] = orders

                            expect(order1._id).to.exist
                            expect(order1.date).to.exist
                            expect(order1.pickupDate.toString()).to.equal(pepeOrder.pickupDate.toString())
                            expect(order1.status).to.equal(pepeOrder.status)
                            expect(order1.meals.length).to.equal(1)

                            expect(order2._id).to.exist
                            expect(order2.date).to.exist
                            expect(order2.pickupDate.toString()).to.equal(mariaOrder.pickupDate.toString())
                            expect(order2.status).to.equal(mariaOrder.status)
                            expect(order2.meals.length).to.equal(1)

                            const [{ firstCourse: course1order1, secondCourse: course2order1 }] = order1.meals
                            const [{ firstCourse: course1order2, secondCourse: course2order2 }] = order2.meals
                            
                            //  check course 1 and 2 fields match firstCourse and secondCourse 
                            expect(order1.meals[0].firstCourse).to.equal(course1order1)
                            expect(order1.meals[0].secondCourse).to.equal(course2order1)
                            
                            expect(order2.meals[0].firstCourse).to.equal(course1order2)
                            expect(order2.meals[0].secondCourse).to.equal(course2order2)
            
                        })
                })

        })
    })

    describe('create eater', () => {

        it('should succeed on correct data', () => {

            const eater = new Eater(john)

            return eater.save()
                .then(eater => {
                    expect(eater._id).to.exist
                    expect(eater.name).to.equal(john.name) // TODO
                    expect(eater.lastName).to.equal('Doe')
                    expect(eater.email).to.equal('johndoe@mail.com')
                    expect(eater.password).to.equal('123')
                    expect(eater.yearOfBirth).to.equal(1988)
                    expect(eater.gender).to.equal('M')
                })
        })
    })

    describe('create payment', () => {
        it('should succeed on correct payment data', () => {
            const payment = new Payment({ cardHolderName: 'Jane', cardHolderLastName: 'Doe', cardNumber: '1111333344445555', expirationDate: '12/2020' })
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