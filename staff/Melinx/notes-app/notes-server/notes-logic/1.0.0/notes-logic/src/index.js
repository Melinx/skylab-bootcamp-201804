'use strict'

const { models: { Eater, order } } = require('notes-data')

const logic = {
    /**
     * 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    registerEater(name, surname, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('eater name is not a string')

                if (!(name = name.trim()).length) throw Error('eater name is empty or blank')

                if (typeof surname !== 'string') throw Error('eater surname is not a string')

                if ((surname = surname.trim()).length === 0) throw Error('eater surname is empty or blank')

                if (typeof email !== 'string') throw Error('eater email is not a string')

                if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

                if (typeof password !== 'string') throw Error('eater password is not a string')

                if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

                return Eater.findOne({ email })
                    .then(eater => {
                        if (eater) throw Error(`eater with email ${email} already exists`)

                        return Eater.create({ name, surname, email, password })
                            .then(() => true)
                    })
            })
    },

    /**
     * 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */
    authenticateEater(email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('eater email is not a string')

                if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

                if (typeof password !== 'string') throw Error('eater password is not a string')

                if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

                return Eater.findOne({ email, password })
            })
            .then(eater => {
                if (!eater) throw Error('wrong credentials')

                return eater.id
            })
    },

    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<Eater>} 
     */
    retrieveEater(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('eater id is not a string')

                if (!(id = id.trim()).length) throw Error('eater id is empty or blank')

                return Eater.findById(id).select({ _id: 0, name: 1, surname: 1, email: 1 })
            })
            .then(eater => {
                if (!eater) throw Error(`no eater found with id ${id}`)

                return eater
            })
    },

    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * @param {string} newEmail 
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */
    updateEater(id, name, surname, email, password, newEmail, newPassword) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('eater id is not a string')

                if (!(id = id.trim()).length) throw Error('eater id is empty or blank')

                if (typeof name !== 'string') throw Error('eater name is not a string')

                if (!(name = name.trim()).length) throw Error('eater name is empty or blank')

                if (typeof surname !== 'string') throw Error('eater surname is not a string')

                if ((surname = surname.trim()).length === 0) throw Error('eater surname is empty or blank')

                if (typeof email !== 'string') throw Error('eater email is not a string')

                if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

                if (typeof password !== 'string') throw Error('eater password is not a string')

                if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

                return Eater.findOne({ email, password })
            })
            .then(eater => {
                if (!eater) throw Error('wrong credentials')

                if (eater.id !== id) throw Error(`no eater found with id ${id} for given credentials`)

                if (newEmail) {
                    return Eater.findOne({ email: newEmail })
                        .then(_user => {
                            if (_user && _user.id !== id) throw Error(`eater with email ${newEmail} already exists`)

                            return eater
                        })
                }

                return eater
            })
            .then(eater => {
                eater.name = name
                eater.surname = surname
                eater.email = newEmail ? newEmail : email
                eater.password = newPassword ? newPassword : password

                return eater.save()
            })
            .then(() => true)
    },

    /**
     * 
     * @param {string} id 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    unregisterEater(id, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('eater id is not a string')

                if (!(id = id.trim()).length) throw Error('eater id is empty or blank')

                if (typeof email !== 'string') throw Error('eater email is not a string')

                if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

                if (typeof password !== 'string') throw Error('eater password is not a string')

                if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

                return Eater.findOne({ email, password })
            })
            .then(eater => {
                if (!eater) throw Error('wrong credentials')

                if (eater.id !== id) throw Error(`no eater found with id ${id} for given credentials`)

                return eater.remove()
            })
            .then(() => true)
    },

    /**
     * 
     * @param {string} eaterId
     * @param {string} text 
     * 
     * @returns {Promise<string>}
     */
    addOrder(eaterId, text) {
        return Promise.resolve()
            .then(() => {
                if (typeof eaterId !== 'string') throw Error('eater id is not a string')

                if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

                if (typeof text !== 'string') throw Error('text is not a string')

                if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

                // way 1 (step by step)
                // return Eater.findById(eaterId)
                //     .then(eater => {
                //         if (!eater) throw Error(`no eater found with id ${eaterId}`)

                //         const order = new order({ text })

                //         eater.notes.push(order)

                //         return eater.save()
                //             .then(() => order.id)
                //     })

                // way 2 (1 step)
                return Eater.findByIdAndUpdate(eaterId, { $push: { notes: { text } } }, { new: true })
                    .then(eater => {
                        if (!eater) throw Error(`no eater found with id ${eaterId}`)

                        return eater.notes[eater.notes.length - 1].id
                    })
            })
    },

    /**
     * 
     * @param {string} eaterId
     * @param {string} orderId 
     * 
     * @returns {Promise<order>}
     */
    retrieveNote(eaterId, orderId) {
        return Promise.resolve()
            .then(() => {
                if (typeof eaterId !== 'string') throw Error('eater id is not a string')

                if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

                if (typeof orderId !== 'string') throw Error('order id is not a string')

                if (!(orderId = orderId.trim())) throw Error('order id is empty or blank')

                return Eater.findById(eaterId)
                    .then(eater => {
                        if (!eater) throw Error(`no eater found with id ${eaterId}`)

                        const order = eater.notes.id(orderId)

                        if (!order) throw Error(`no order found with id ${orderId}`)

                        const { id, text } = order

                        return { id, text }
                    })
            })
    },

    /**
     * @param {string} eaterId
     * 
     * @returns {Promise<[order]>}
     */
    listNotes(eaterId) {
        return Promise.resolve()
            .then(() => {
                if (typeof eaterId !== 'string') throw Error('eater id is not a string')

                if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

                return Eater.findById(eaterId)
                    .then(eater => {
                        if (!eater) throw Error(`no eater found with id ${eaterId}`)

                        return eater.notes.map(({ id, text }) => ({ id, text }))
                    })
            })
    },

    /**
     * 
     * @param {string} eaterId
     * @param {string} orderId 
     *
     * @returns {Promise<boolean>}
     */
    removeNote(eaterId, orderId) {
        return Promise.resolve()
            .then(() => {
                if (typeof eaterId !== 'string') throw Error('eater id is not a string')

                if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

                if (typeof orderId !== 'string') throw Error('order id is not a string')

                if (!(orderId = orderId.trim())) throw Error('order id is empty or blank')

                return Eater.findById(eaterId)
                    .then(eater => {
                        if (!eater) throw Error(`no eater found with id ${eaterId}`)

                        const order = eater.notes.id(orderId)

                        if (!order) throw Error(`no order found with id ${orderId}`)

                        order.remove()

                        return eater.save()
                    })
                    .then(() => true)
            })
    },

    /**
     * 
     * @param {string} eaterId
     * @param {string} orderId 
     * @param {string} text 
     * 
     * @returns {Promise<boolean>}
     */
    updateNote(eaterId, orderId, text) {
        return Promise.resolve()
            .then(() => {
                if (typeof eaterId !== 'string') throw Error('eater id is not a string')

                if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

                if (typeof orderId !== 'string') throw Error('order id is not a string')

                if (!(orderId = orderId.trim())) throw Error('order id is empty or blank')

                if (typeof text !== 'string') throw Error('text is not a string')

                if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

                return Eater.findById(eaterId)
                    .then(eater => {
                        if (!eater) throw Error(`no eater found with id ${eaterId}`)

                        const order = eater.notes.id(orderId)

                        if (!order) throw Error(`no order found with id ${orderId}`)

                        order.text = text

                        return eater.save()
                    })
                    .then(() => true)
            })
    },

    /**
     * 
     * @param {string} eaterId
     * @param {string} text 
     * 
     * @returns {Promise<[order]>}
     */
    findNotes(eaterId, text) {
        return Promise.resolve()
            .then(() => {
                if (typeof eaterId !== 'string') throw Error('eater id is not a string')

                if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

                if (typeof text !== 'string') throw Error('text is not a string')

                if (!text.length) throw Error('text is empty')

                return Eater.findById(eaterId)
                    .then(eater => {
                        if (!eater) throw Error(`no eater found with id ${eaterId}`)

                        return eater.notes.filter(order => order.text.includes(text)).map(({ id, text }) => ({ id, text }))
                    })
            })
    }
}

module.exports = logic