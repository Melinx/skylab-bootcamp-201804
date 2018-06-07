'use strict'

const { models: { Eater, Course, Order, Payment } } = require('data')

const logic = {
    /**
     * @param {string} name
     * @param {string} lastName
     * @param {string} gmail
     * @param {string} password
     *
     * @returns {Promise<boolean>}
     */

    registerEater(name, lastName, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('eater name is not a string')

                if (!(name = name.trim()).length) throw Error('eater name is empty or blank')

                if (typeof lastName !== 'string') throw Error('eater lastName is not a string')

                if ((lastName = lastName.trim()).length === 0) throw Error('eater lastName is empty or blank')

                if (typeof email !== 'string') throw Error('eater email is not a string')

                if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

                if (typeof password !== 'string') throw Error('eater password is not a string')

                if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

                return Eater.findOne({ email })
                    .then((email) => {
                        if (email) throw Error(`Eater with email ${email} already exists`)

                        return Eater.create({ name, lastName, email, password })
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
    retrieveEater(eaterId) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('eater id is not a string')

                if (!(id = id.trim()).length) throw Error('eater id is empty or blank')

                return Eater.findById(id).select({ _id: 0, name: 1, lastName: 1, email: 1 })
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
     * @param {string} lastName 
     * @param {string} email 
     * @param {string} password 
     * @param {string} newEmail 
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */

    updateEater(id, name, lastName, email, password, newEmail, newPassword) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('eater id is not a string')

                if (!(id = id.trim()).length) throw Error('eater id is empty or blank')

                if (typeof name !== 'string') throw Error('eater name is not a string')

                if (!(name = name.trim()).length) throw Error('eater name is empty or blank')

                if (typeof lastName !== 'string') throw Error('eater lastName is not a string')

                if ((lastName = lastName.trim()).length === 0) throw Error('eater lastName is empty or blank')

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
                eater.lastName = lastName
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
     * DOCUM:
     * 
     * Should list courses each day of the week; Monday through Friday. 
     * 
     * @returns {Promise<string>}
     */

    listCoursesByDay() {
        return Promise.resolve()
            .then(() => {
                const today = new Date()
                let currentDay = today.getDay()

                return Course.find({ dayAvail: currentDay })
                    .then((courses) => {
                        if (!courses) throw Error(`no courses were found on ${currentDay}`)
                        return courses
                    })
            })
    }
}
module.exports = logic

