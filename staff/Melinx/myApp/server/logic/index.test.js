'use strict'

require('dotenv').config()

const { mongoose, models: { Eater, Order, Course, Payment } } = require('data')
const { expect } = require('chai')
const logic = require('.')
// const _ = require('lodash')

const { env: { DB_URL } } = process

describe('logic (myApp)', () => {
    const eaterData = { name: 'John', lastName: 'Doe', email: 'jd@mail.com', password: '123' }
    const otherEaterData = { name: 'Jack', lastName: 'Wayne', email: 'jw@mail.com', password: '456' }
    const dummyUserId = '123456781234567812345678'
    const dummyOrderId = '123456781234567812345678'
    before(() => mongoose.connect(DB_URL))

    beforeEach(() => Eater.remove())

    describe('register eater', () => {
        it('should succeed on correct dada', () =>
            logic.registerEater('John', 'Doe', 'jd@mail.com', '123')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on already registered eater', () => {
            Eater.create(eaterData)
                .then(eater => {
                    const { name, lastName, email, password } = eater

                    return logic.registerEater(name, lastName, email, password)
                })
                .catch(({ message }) => {
                    expect(message).to.equal(`eater with email ${eater.email} already exists`)
                })
        })

        it('should fail on no eater name', () =>
            logic.registerEater()
                .catch(({ message }) => expect(message).to.equal('eater name is not a string'))
        )

        it('should fail on empty eater name', () =>
            logic.registerEater('')
                .catch(({ message }) => expect(message).to.equal('eater name is empty or blank'))
        )

        it('should fail on blank eater name', () =>
            logic.registerEater('     ')
                .catch(({ message }) => expect(message).to.equal('eater name is empty or blank'))
        )

        it('should fail on no eater lastName', () =>
            logic.registerEater(eaterData.name)
                .catch(({ message }) => expect(message).to.equal('eater lastName is not a string'))
        )

        it('should fail on empty eater lastName', () =>
            logic.registerEater(eaterData.name, '')
                .catch(({ message }) => expect(message).to.equal('eater lastName is empty or blank'))
        )

        it('should fail on blank eater lastName', () =>
            logic.registerEater(eaterData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('eater lastName is empty or blank'))
        )

        it('should fail on no eater email', () =>
            logic.registerEater(eaterData.name, eaterData.lastName)
                .catch(({ message }) => expect(message).to.equal('eater email is not a string'))
        )

        it('should fail on empty eater email', () =>
            logic.registerEater(eaterData.name, eaterData.lastName, '')
                .catch(({ message }) => expect(message).to.equal('eater email is empty or blank'))
        )

        it('should fail on blank eater email', () =>
            logic.registerEater(eaterData.name, eaterData.lastName, '     ')
                .catch(({ message }) => expect(message).to.equal('eater email is empty or blank'))
        )

        it('should fail on no eater password', () =>
            logic.registerEater(eaterData.name, eaterData.lastName, eaterData.email)
                .catch(({ message }) => expect(message).to.equal('eater password is not a string'))
        )

        it('should fail on empty eater password', () =>
            logic.registerEater(eaterData.name, eaterData.lastName, eaterData.email, '')
                .catch(({ message }) => expect(message).to.equal('eater password is empty or blank'))
        )

        it('should fail on blank eater password', () =>
            logic.registerEater(eaterData.name, eaterData.lastName, eaterData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('eater password is empty or blank'))
        )
    })

    describe('authenticate eater', () => {
        it('should succeed on correct data', () => {
            return Eater.create(eaterData)
                .then(eater =>{
                    return logic.authenticateUser('jd@mail.com', '123')
                        .then(id => expect(id).to.exist)
                    }
                )
        })

        it('should fail on no eater email', () =>
            logic.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('eater email is not a string'))
        )

        it('should fail on empty eater email', () =>
            logic.authenticateUser('')
                .catch(({ message }) => expect(message).to.equal('eater email is empty or blank'))
        )

        it('should fail on blank eater email', () =>
            logic.authenticateUser('     ')
                .catch(({ message }) => expect(message).to.equal('eater email is empty or blank'))
        )

        it('should fail on no eater password', () =>
            logic.authenticateUser(eaterData.email)
                .catch(({ message }) => expect(message).to.equal('eater password is not a string'))
        )

        it('should fail on empty eater password', () =>
            logic.authenticateUser(eaterData.email, '')
                .catch(({ message }) => expect(message).to.equal('eater password is empty or blank'))
        )

        it('should fail on blank eater password', () =>
            logic.authenticateUser(eaterData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('eater password is empty or blank'))
        )
    })

    describe('retrieve eater', () => {
        it('should succeed on correct data', () =>
            Eater.create(eaterData)
                .then(({ id }) => {
                    return logic.retrieveEater(id)
                })
                .then(eater => {
                    expect(eater).to.exist

                    const { name, lastName, email, _id, password, orders } = eater

                    expect(name).to.equal('John')
                    expect(lastName).to.equal('Doe')
                    expect(email).to.equal('jd@mail.com')

                    expect(_id).to.be.undefined
                    expect(password).to.be.undefined
                    expect(orders).to.be.undefined
                })
        )

        it('should fail on no eater id', () =>
            logic.retrieveEater()
                .catch(({ message }) => expect(message).to.equal('eater id is not a string'))
        )

        it('should fail on empty eater id', () =>
            logic.retrieveEater('')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on blank eater id', () =>
            logic.retrieveEater('     ')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )
    })

    describe('udpate eater', () => {
        it('should succeed on correct data', () =>
            Eater.create(eaterData)
                .then(({ id }) => {
                    return logic.updateEater(id, 'Jack', 'Wayne', 'jd@mail.com', '123', 'jw@mail.com', '456')
                        .then(res => {
                            expect(res).to.be.true

                            return Eater.findById(id)
                        })
                        .then(eater => {
                            expect(eater).to.exist

                            const { name, lastName, email, password } = eater

                            expect(eater.id).to.equal(id)
                            expect(name).to.equal('Jack')
                            expect(lastName).to.equal('Wayne')
                            expect(email).to.equal('jw@mail.com')
                            expect(password).to.equal('456')
                        })
                })
        )

        it('should fail on changing email to an already existing eater\'s email', () =>
            Promise.all([
                Eater.create(eaterData),
                Eater.create(otherEaterData)
            ])
                .then(([{ id: id1 }, { id: id2 }]) => {
                    const { name, lastName, email, password } = eaterData

                    return logic.updateEater(id1, name, lastName, email, password, otherEaterData.email)
                })
                .catch(({ message }) => expect(message).to.equal(`eater with email ${otherEaterData.email} already exists`))
        )

        it('should fail on no eater id', () =>
            logic.updateEater()
                .catch(({ message }) => expect(message).to.equal('eater id is not a string'))
        )

        it('should fail on empty eater id', () =>
            logic.updateEater('')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on blank eater id', () =>
            logic.updateEater('     ')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on no eater name', () =>
            logic.updateEater(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('eater name is not a string'))
        )

        it('should fail on empty eater name', () =>
            logic.updateEater(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('eater name is empty or blank'))
        )

        it('should fail on blank eater name', () =>
            logic.updateEater(dummyUserId, '     ')
                .catch(({ message }) => expect(message).to.equal('eater name is empty or blank'))
        )

        it('should fail on no eater lastName', () =>
            logic.updateEater(dummyUserId, eaterData.name)
                .catch(({ message }) => expect(message).to.equal('eater lastName is not a string'))
        )

        it('should fail on empty eater lastName', () =>
            logic.updateEater(dummyUserId, eaterData.name, '')
                .catch(({ message }) => expect(message).to.equal('eater lastName is empty or blank'))
        )

        it('should fail on blank eater lastName', () =>
            logic.updateEater(dummyUserId, eaterData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('eater lastName is empty or blank'))
        )

        it('should fail on no eater email', () =>
            logic.updateEater(dummyUserId, eaterData.name, eaterData.lastName)
                .catch(({ message }) => expect(message).to.equal('eater email is not a string'))
        )

        it('should fail on empty eater email', () =>
            logic.updateEater(dummyUserId, eaterData.name, eaterData.lastName, '')
                .catch(({ message }) => expect(message).to.equal('eater email is empty or blank'))
        )

        it('should fail on blank eater email', () =>
            logic.updateEater(dummyUserId, eaterData.name, eaterData.lastName, '     ')
                .catch(({ message }) => expect(message).to.equal('eater email is empty or blank'))
        )

        it('should fail on no eater password', () =>
            logic.updateEater(dummyUserId, eaterData.name, eaterData.lastName, eaterData.email)
                .catch(({ message }) => expect(message).to.equal('eater password is not a string'))
        )

        it('should fail on empty eater password', () =>
            logic.updateEater(dummyUserId, eaterData.name, eaterData.lastName, eaterData.email, '')
                .catch(({ message }) => expect(message).to.equal('eater password is empty or blank'))
        )

        it('should fail on blank eater password', () =>
            logic.updateEater(dummyUserId, eaterData.name, eaterData.lastName, eaterData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('eater password is empty or blank'))
        )
    })

    describe('unregister eater', () => {
        it('should succeed on correct data', () =>
            Eater.create(eaterData)
                .then(({ id }) => {
                    return logic.unregisterEater(id, 'jd@mail.com', '123')
                        .then(res => {
                            expect(res).to.be.true

                            return Eater.findById(id)
                        })
                        .then(eater => {
                            expect(eater).to.be.null
                        })
                })
        )

        it('should fail on no eater id', () =>
            logic.unregisterEater()
                .catch(({ message }) => expect(message).to.equal('eater id is not a string'))
        )

        it('should fail on empty eater id', () =>
            logic.unregisterEater('')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on blank eater id', () =>
            logic.unregisterEater('     ')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on no eater email', () =>
            logic.unregisterEater(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('eater email is not a string'))
        )

        it('should fail on empty eater email', () =>
            logic.unregisterEater(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('eater email is empty or blank'))
        )

        it('should fail on blank eater email', () =>
            logic.unregisterEater(dummyUserId, '     ')
                .catch(({ message }) => expect(message).to.equal('eater email is empty or blank'))
        )

        it('should fail on no eater password', () =>
            logic.unregisterEater(dummyUserId, eaterData.email)
                .catch(({ message }) => expect(message).to.equal('eater password is not a string'))
        )

        it('should fail on empty eater password', () =>
            logic.unregisterEater(dummyUserId, eaterData.email, '')
                .catch(({ message }) => expect(message).to.equal('eater password is empty or blank'))
        )

        it('should fail on blank eater password', () =>
            logic.unregisterEater(dummyUserId, eaterData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('eater password is empty or blank'))
        )
    })

    true || describe('add order', () => {
        it('should succeed on correct data', () =>
            Eater.create(eaterData)
                .then(({ id }) => {
                    return logic.addNote(id, noteText)
                        .then(orderId => {
                            // expect(typeof orderId).to.equal('string')
                            // or
                            expect(orderId).to.be.a('string')
                            expect(orderId).to.exist

                            return Eater.findById(id)
                                .then(eater => {
                                    expect(eater).to.exist

                                    expect(eater.orders).to.exist
                                    expect(eater.orders.length).to.equal(1)

                                    const [{ id, text }] = eater.orders

                                    expect(id).to.equal(orderId)
                                    expect(text).to.equal(noteText)
                                })
                        })
                })
        )

        it('should fail on wrong eater id', () => {
            return logic.addNote(dummyUserId, noteText)
                .catch(({ message }) => expect(message).to.equal(`no eater found with id ${dummyUserId}`))
        })

        it('should fail on no eater id', () =>
            logic.addNote()
                .catch(({ message }) => expect(message).to.equal('eater id is not a string'))
        )

        it('should fail on empty eater id', () =>
            logic.addNote('')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on blank eater id', () =>
            logic.addNote('     ')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on no text', () => {
            logic.addNote(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('text is not a string'))
        })

        it('should fail on empty text', () =>
            logic.addNote(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('text is empty or blank'))
        )

        it('should fail on blank text', () =>
            logic.addNote(dummyUserId, '   ')
                .catch(({ message }) => expect(message).to.equal('text is empty or blank'))
        )
    })

    true || describe('retrieve order', () => {
        it('should succeed on correct data', () => {
            const eater = new Eater(eaterData)
            const order = new Note({ text: noteText })

            eater.orders.push(order)

            return eater.save()
                .then(({ id: userId, orders: [{ id: orderId }] }) => {
                    return logic.retrieveNote(userId, orderId)
                })
                .then(({ id, text, _id }) => {
                    expect(id).to.equal(order.id)
                    expect(text).to.equal(order.text)
                    expect(_id).not.to.exist
                })
        })

        it('should fail on non eater id', () =>
            logic.retrieveNote()
                .catch(({ message }) => expect(message).to.equal('eater id is not a string'))
        )

        it('should fail on empty eater id', () =>
            logic.retrieveNote('')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on blank eater id', () =>
            logic.retrieveNote('      ')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on wrong eater id', () => {
            const eater = new Eater(eaterData)
            const order = new Note({ text: noteText })

            eater.orders.push(order)

            return eater.save()
                .then(({ orders: [{ id: orderId }] }) => {
                    return logic.retrieveNote(dummyUserId, orderId)
                        .catch(({ message }) => expect(message).to.equal(`no eater found with id ${dummyUserId}`))
                })
        })

        it('should fail on no order id', () =>
            logic.retrieveNote(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('order id is not a string'))
        )

        it('should fail on empty order id', () =>
            logic.retrieveNote(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('order id is empty or blank'))
        )

        it('should fail on blank order id', () =>
            logic.retrieveNote(dummyUserId, '       ')
                .catch(({ message }) => expect(message).to.equal('order id is empty or blank'))
        )

        it('should fail on wrong order id', () => {
            const eater = new Eater(eaterData)
            const order = new Note({ text: noteText })

            eater.orders.push(order)

            return eater.save()
                .then(({ id: userId }) => {
                    return logic.retrieveNote(userId, dummyNoteId)
                        .catch(({ message }) => expect(message).to.equal(`no order found with id ${dummyNoteId}`))
                })
        })
    })

    true || describe('list orders', () => {
        it('should succeed on correct data', () => {
            const eater = new Eater(eaterData)

            const orders = indexes.map(index => new Note({ text: `${noteText} ${index}` }))

            eater.orders = orders

            return eater.save()
                .then(({ id: userId, orders }) => {
                    // const validNoteIds = []
                    // const validNoteTexts = []

                    // orders.forEach(({ id, text }) => {
                    //     validNoteIds.push(id)
                    //     validNoteTexts.push(text)
                    // })
                    // or
                    const validNoteIds = _.map(orders, 'id')
                    const validNoteTexts = _.map(orders, 'text')

                    return logic.listNotes(userId)
                        .then(orders => {
                            expect(orders).to.exist
                            expect(orders.length).to.equal(indexes.length)

                            orders.forEach(({ id, text, _id }) => {
                                // expect(validNoteIds.includes(id)).to.be.true
                                // expect(validNoteTexts.includes(text)).to.be.true
                                // or
                                expect(validNoteIds).to.include(id)
                                expect(validNoteTexts).to.include(text)
                                expect(_id).not.to.exist
                            })
                        })
                })
        })

        it('should fail on non eater id', () =>
            logic.listNotes()
                .catch(({ message }) => expect(message).to.equal('eater id is not a string'))
        )

        it('should fail on empty eater id', () =>
            logic.listNotes('')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on blank eater id', () =>
            logic.listNotes('      ')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )
    })

    true || describe('update order', () => {
        it('should succeed on correct data', () =>
            Eater.create(eaterData)
                .then(({ id: userId }) =>
                    Eater.findByIdAndUpdate(userId, { $push: { orders: { text: noteText } } }, { new: true })
                        .then(eater => {
                            const orderId = eater.orders[eater.orders.length - 1].id

                            const newNoteText = `${noteText} 2`

                            return logic.updateNote(userId, orderId, newNoteText)
                                .then(res => {
                                    expect(res).to.be.true

                                    return Eater.findById(userId)
                                })
                                .then(({ orders }) => {
                                    const [{ id, text }] = orders

                                    expect(id).to.equal(orderId)
                                    expect(text).to.equal(newNoteText)
                                })
                        })
                )
        )

        it('should fail on non eater id', () =>
            logic.updateNote()
                .catch(({ message }) => expect(message).to.equal('eater id is not a string'))
        )

        it('should fail on empty eater id', () =>
            logic.updateNote('')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on blank eater id', () =>
            logic.updateNote('      ')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on wrong eater id', () => {
            const eater = new Eater(eaterData)
            const order = new Note({ text: noteText })

            eater.orders.push(order)

            return eater.save()
                .then(({ orders: [{ id: orderId }] }) => {
                    return logic.updateNote(dummyUserId, orderId, `${noteText} 2`)
                        .catch(({ message }) => expect(message).to.equal(`no eater found with id ${dummyUserId}`))
                })
        })

        it('should fail on wrong order id', () => {
            const eater = new Eater(eaterData)
            const order = new Note({ text: noteText })

            eater.orders.push(order)

            return eater.save()
                .then(({ id: userId }) => {
                    return logic.updateNote(userId, dummyNoteId, `${noteText} 2`)
                        .catch(({ message }) => expect(message).to.equal(`no order found with id ${dummyNoteId}`))
                })
        })
    })

    true || describe('remove order', () => {
        it('should succeed on correct data', () => {
            const eater = new Eater(eaterData)
            const order = new Note({ text: noteText })

            eater.orders.push(order)

            return eater.save()
                .then(({ id: userId, orders: [{ id: orderId }] }) => {
                    return logic.removeNote(userId, orderId)
                        .then(res => {
                            expect(res).to.be.true

                            return Eater.findById(userId)
                        })
                        .then(({ orders }) => {
                            expect(orders).to.exist
                            expect(orders.length).to.equal(0)
                        })
                })
        })

        it('should fail on non eater id', () =>
            logic.removeNote()
                .catch(({ message }) => expect(message).to.equal('eater id is not a string'))
        )

        it('should fail on empty eater id', () =>
            logic.removeNote('')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on blank eater id', () =>
            logic.removeNote('      ')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on wrong eater id', () => {
            const eater = new Eater(eaterData)
            const order = new Note({ text: noteText })

            eater.orders.push(order)

            return eater.save()
                .then(({ orders: [{ id: orderId }] }) => {
                    return logic.removeNote(dummyUserId, orderId)
                        .catch(({ message }) => expect(message).to.equal(`no eater found with id ${dummyUserId}`))
                })
        })

        it('should fail on no order id', () =>
            logic.removeNote(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('order id is not a string'))
        )

        it('should fail on empty order id', () =>
            logic.removeNote(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('order id is empty or blank'))
        )

        it('should fail on blank order id', () =>
            logic.removeNote(dummyUserId, '       ')
                .catch(({ message }) => expect(message).to.equal('order id is empty or blank'))
        )

        it('should fail on wrong order id', () => {
            const eater = new Eater(eaterData)
            const order = new Note({ text: noteText })

            eater.orders.push(order)

            return eater.save()
                .then(({ id: userId }) => {
                    return logic.removeNote(userId, dummyNoteId)
                        .catch(({ message }) => expect(message).to.equal(`no order found with id ${dummyNoteId}`))
                })
        })
    })

    true || describe('find orders', () => {
        it('should succeed on correct data', () => {
            const eater = new Eater(eaterData)

            eater.orders.push(new Note({ text: `${noteText} a` }))
            eater.orders.push(new Note({ text: `${noteText} ab` }))
            eater.orders.push(new Note({ text: `${noteText} abc` }))
            eater.orders.push(new Note({ text: `${noteText} bc` }))
            eater.orders.push(new Note({ text: `${noteText} c` }))

            const text = 'ab'

            return eater.save()
                .then(({ id: userId, orders }) => {
                    const matchingNotes = orders.filter(order => order.text.includes(text))

                    const validNoteIds = _.map(matchingNotes, 'id')
                    const validNoteTexts = _.map(matchingNotes, 'text')

                    return logic.findNotes(userId, text)
                        .then(orders => {
                            expect(orders).to.exist
                            expect(orders.length).to.equal(matchingNotes.length)

                            orders.forEach(({ id, text, _id }) => {
                                // expect(validNoteIds.includes(id)).to.be.true
                                // expect(validNoteTexts.includes(text)).to.be.true
                                // or
                                expect(validNoteIds).to.include(id)
                                expect(validNoteTexts).to.include(text)
                                expect(_id).not.to.exist
                            })
                        })
                })
        })

        it('should fail on non eater id', () =>
            logic.findNotes()
                .catch(({ message }) => expect(message).to.equal('eater id is not a string'))
        )

        it('should fail on empty eater id', () =>
            logic.findNotes('')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on blank eater id', () =>
            logic.findNotes('      ')
                .catch(({ message }) => expect(message).to.equal('eater id is empty or blank'))
        )

        it('should fail on no text', () =>
            logic.findNotes(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('text is not a string'))
        )

        it('should fail on empty text', () =>
            logic.findNotes(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('text is empty'))
        )
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
